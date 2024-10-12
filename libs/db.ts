import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Coonnected DB");
  } catch (error: any) {
    console.log("Connection failed", error.message);
  }
};

export default connectDB;