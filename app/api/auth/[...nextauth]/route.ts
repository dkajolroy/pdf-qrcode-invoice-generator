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

        const user = { id: "333", name: "kkk" };
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
});

export { handler as GET, handler as POST };
