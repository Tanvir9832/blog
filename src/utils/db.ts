import mongoose from "mongoose"

export const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL as string)
    } catch (error) {
        console.log(error);
        throw error;
    }
}