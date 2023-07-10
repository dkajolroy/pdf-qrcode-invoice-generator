import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

interface InputData {
  name?: string;
  email?: string;
  password?: string;
}
export async function POST(req: NextRequest) {
  try {
    const { name, email, password }: InputData = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Invalid Credentials !" });
    }
    // generate username
    const username =
      slugify(name.trim(), {
        lower: true,
        replacement: ".",
      }) + (Math.random() * 999).toFixed(0);

    // encrypt password
    const encrypted = await bcrypt.hash(password.trim(), 10);

    const user = await prisma.user.create({
      data: { email, name, username, password: encrypted },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
