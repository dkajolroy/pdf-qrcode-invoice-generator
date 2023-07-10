import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  try {
    const document = await prisma.document.findMany();
    return NextResponse.json(document);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong !" });
  }
}

interface InputData {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  userId?: string;
}
export async function POST(req: NextRequest) {
  try {
    const randomId = Math.random().toString(32).split(".")[1].toUpperCase();

    const { name, email, address, city, phone, userId }: InputData =
      await req.json();
    if (!name || !email || !city || !phone || !address || !userId) {
      return NextResponse.json({ message: "Invalid credentials !" });
    }

    const doc = await prisma.document.create({
      data: {
        name,
        email,
        address,
        city,
        phone,
        accountNo: randomId,
        userId,
      },
    });
    return NextResponse.json(doc);
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
