import { dbConnect } from "@/lib/mongodb";
import mongoose, { Schema, model, models } from "mongoose";
import { NextResponse } from "next/server";

// ১. ইন্টারফেস তৈরি করা (TypeScript এর জন্য)
interface INotice {
  title: string;
  date: Date;
  category: string;
}

// ২. স্কিমা এবং মডেল ডেফিনিশন
const NoticeSchema = new Schema<INotice>({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
});

// মডুলার সিস্টেম: আগে থেকে মডেল থাকলে সেটি ব্যবহার করবে, নয়তো নতুন তৈরি করবে
const Notice = models.Notice || model<INotice>("Notice", NoticeSchema);

export async function GET() {
  try {
    await dbConnect();

    // সবশেষ ৫টি নোটিশ রিট্রিভ করা
    const notices = await Notice.find({})
      .sort({ date: -1 })
      .limit(5)
      .lean(); // .lean() পারফরম্যান্স বাড়াতে সাহায্য করে

    return NextResponse.json(notices, { status: 200 });
  } catch (error: any) {
    console.error("Database Error:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}