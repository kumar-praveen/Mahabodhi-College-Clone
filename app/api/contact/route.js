import { connectDB } from "@/dbConfig/dbConfig";
import Contact from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(NextRequest) {
  try {
    connectDB();

    const reqBody = await NextRequest.json();
    const { name, email, subject, phone, message } = reqBody;

    if (!name || !email || !subject || !phone || !message) {
      return NextResponse.json({
        message: "All fields are required",
        status: 400,
      });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      phone,
      message,
    });

    await newContact.save();

    return NextResponse.json({
      success: true,
      message: "Message Submitted Successfully",
      status: 200,

      
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
      status: 500,
    });
  }
}
