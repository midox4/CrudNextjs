import connectMongoDB from "@/libs/mongodb";
import Data from "@/models/Data";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Data.create({ title, description });
  return NextResponse.json({ message: "Data Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const datas = await Data.find();
  return NextResponse.json({ datas });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Data.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data deleted" }, { status: 200 });
}