import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { MdDelete } from "react-icons/md";
import { Button } from './ui/button';
import BlogModal from './blogModal';
// import UpdateBlogModal from './updateBlogModal';

export type blog = {
    _id : string,
    title : string,
    name : string,
    blog : string
}


const Blog = ({blog} : {blog : blog}) => {
  return (
    <Card className="max-w-[350px] w-full flex flex-col items-center justify-center">
        <CardHeader>
            <CardTitle>{blog.title}</CardTitle>
            <CardDescription>{blog.name}</CardDescription>
        </CardHeader>
        <CardContent>
            {
                blog.blog.substring(0, 100) 
            }
            <span className='font-thin text-sm opacity-85 cursor-pointer'> see more</span>
        </CardContent>
        <CardFooter className='flex gap-2'>
            <BlogModal type='update' />
            <Button><MdDelete className='text-red-500' /></Button>
        </CardFooter>
  </Card>
  )
}

export default Blog
