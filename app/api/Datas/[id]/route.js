import connectMongoDB from "@/libs/mongodb"; // connection db 
import Data from "@/models/Data";  // import model 
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Data.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Data updated with succes" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const data = await Data.findOne({ _id: id });
  return NextResponse.json({ data }, { status: 200 });
}




