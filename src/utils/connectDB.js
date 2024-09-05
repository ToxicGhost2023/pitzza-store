import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // افزایش زمان تایم‌اوت برای اتصال به پایگاه داده
    socketTimeoutMS: 45000,  // تنظیم تایم‌اوت سوکت برای ارتباط
  });
  console.log("Connected to DB");
}
export default connectDB;
