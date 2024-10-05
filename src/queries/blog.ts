import { blog } from "@/components/blog";
import { Blog } from "@/model/blog-model";
import { dbConnect } from "@/utils/db"

export const createBlog = async(data : {name : string, title : string , blog : string})=>{
   try {
    dbConnect();
    await Blog.create(data);
   } catch (error) {
    console.log(error);
   }
}

// export const getAllBlogs = () =>{
//     const blogs = Blog.find({});
// }