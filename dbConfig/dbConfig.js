import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, { dbName: "Mahabodhi_College_DB" })
      .then(() => console.log("Connected to database successfully."))
      .catch((err) => console.log(`Error while connecting to database ${err}`));
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
