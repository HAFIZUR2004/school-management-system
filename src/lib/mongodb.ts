import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL || "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local",
  );
}

export const dbConnect = async () => {
  try {
    // যদি অলরেডি কানেক্টেড থাকে
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      dbName: "Madsaha-Database",
    });

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB Connection Error ❌", error);
    throw error;
  }
};
