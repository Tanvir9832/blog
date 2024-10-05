import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"


const UpdateForm = () => {
  return (
    <div>
      <form className='flex flex-col gap-4'>
            <span>{""}</span>
            <Input placeholder='Bloger name'/>
            <Input placeholder='Enter blog title' name='title' />
            <Textarea placeholder='Write your blog here' name='blog' />
            <Button variant="createButton">Update</Button>
        </form>
    </div>
  )
}

export default UpdateForm
