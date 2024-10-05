"use server";

import { createBlog } from "@/queries/blog";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createBlogAction = async(formData : FormData)=>{
    try {
        const name = formData.get("name")as string;
        const title = formData.get("title")as string;
        const blog = formData.get("blog")as string;
        const data = {
            name , title, blog 
        }
        await createBlog(data);
        redirect('/');
    } catch (error) {
        console.log(error);
        throw error;
    }
}
