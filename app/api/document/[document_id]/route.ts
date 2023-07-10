import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { document_id } }: { params: { document_id: string } }
) {
  try {
    if (!document_id) {
      return NextResponse.json({ message: "Invalid Document request !" });
    }
    const data = await prisma.document.findUnique({
      where: { accountNo: document_id },
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
