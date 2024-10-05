import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { createBlogAction } from '@/actions/blog-action'
import { DialogTriggerProps } from '@radix-ui/react-dialog'

const CreateForm = ({DialogTrigger} : {DialogTrigger :ForwardRefExoticComponent<DialogTriggerProps & RefAttributes<HTMLButtonElement>>}) => {
  return (
    <div>
        <form action={createBlogAction} className='flex flex-col gap-4'>
            <span>{""}</span>
            <Input placeholder='Bloger name' name='name'/>
            <Input placeholder='Enter blog title' name='title' />
            <Textarea placeholder='Write your blog here' name='blog' />
            
            <DialogTrigger>
              <Button type='submit' variant="createButton">Post</Button>
            </DialogTrigger>

            
        </form>
    </div>
  )
}

export default CreateForm
