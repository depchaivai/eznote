import { AiFillTag } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Tag = () => {
  return (
    <div className="flex border border-slate-500 px-2 py-1 rounded-md items-center"><AiFillTag size={20} className="mr-1"/>Công việc<button className="ml-2"><AiOutlineClose size={10}/></button></div>
  )
}

export default Tag