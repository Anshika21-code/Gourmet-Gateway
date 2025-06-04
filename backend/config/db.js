import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anshikapvt21:42539683@cluster0.qztnio8.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}