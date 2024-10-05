import mongoose, { Schema } from "mongoose";

interface IBlog {
    _id : string,
    title : string,
    name : string,
    blog : string
}

const blogSchema = new Schema<IBlog>({
    name: { type: String, required: true, trim: true  },
    title: { type: String, required: true, trim: true },
    blog: { type: String, required: true, trim: true}
});

export const Blog = (mongoose.models.Blog as mongoose.Model<IBlog>) || mongoose.model<IBlog>("Blog", blogSchema);