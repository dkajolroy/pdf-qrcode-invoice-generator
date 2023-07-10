import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { type: "text", placeholder: "Username" },
        password: { type: "text", placeholder: "Password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.password || !credentials?.username) {
          return null;
        }
        const findUser = await prisma.user.findFirst({
          where: {
            OR: [
              { username: credentials.username },
              { email: credentials.username },
            ],
          },
        });
        if (
          findUser &&
          (await bcrypt.compare(credentials.password, findUser.password))
        ) {
          const { created_at, updated_at, password, ...other } = findUser;
          return other;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    session({ token, session }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
