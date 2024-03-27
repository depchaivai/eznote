import { SiAddthis } from "react-icons/si";
import { useOnClickOutside, useToggle } from "usehooks-ts";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useRef } from "react";

const Settings = () => {
  const [value, toggle, setValue] = useToggle(true);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setValue(true));
  return (
    <div className="">
        <h1 className="font-bold text-3xl p-10">Settings</h1>
        <div className="p-10">
            <div className="border border-stone-800 rounded-md px-6 py-4">
              <div className="flex items-center h-12">
                <h2 className="text-2xl font-bold">Tags</h2>
                { value 
                  ?  <SiAddthis size={25} onClick={toggle}/>
                  : <><input ref={ref} type="text" className="px-2 py-1 ring-1 ring-stone-400 rounded-md"/><button className="px-2 py-1"><BsFillCheckSquareFill size={25}/></button></>
                }
              </div>
              <div className="flex"></div>
            </div>
        </div>
        
    </div>
  )
}

export default Settings