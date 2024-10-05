import { Button } from "@/components/ui/button";
import BlogModal from "@/components/blogModal";
import Blogs from "@/components/blogs";
export default function Home() {
  return (
    <div className="text-center flex flex-wrap flex-col items-center mt-2">
      <div className="fixed">
        <BlogModal type="create" />
      </div>
      <div className="w-full mt-10"> 
        <Blogs />
      </div>
    </div>
  );
}
