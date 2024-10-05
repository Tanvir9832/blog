import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { IoMdAdd } from "react-icons/io";
import CreateForm from './createForm';
import { FaPen } from "react-icons/fa";
import UpdateForm from './updateForm';

const BlogModal = ({type} : {type : string}) => {
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                {
                    type==='create'? (
                        <Button className="flex gap-1 items-center justify-center" variant="createButton"> 
                    <IoMdAdd className="text-white text-lg" /> 
                    Write Your Blog
                </Button>
                    ) : (
                        <Button> <FaPen className='text-green-500' /> </Button>
                    )
                }
                
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                {type==='create'? <CreateForm DialogTrigger={DialogTrigger} /> : <UpdateForm />}
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default BlogModal
