import { useRef } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import { useOnClickOutside, useToggle } from "usehooks-ts";
import SettingBlock from "../SettingBlock";
import Tag from "../Tag";

const TagSetting = () => {
    const [value, toggle, setValue] = useToggle(true);
    const ref = useRef(null);
    const header = value
        ? <button className="ml-2"><SiAddthis size={25} onClick={toggle} /></button>
        : <><input ref={ref} type="text" className="px-2 py-1 ring-1 ring-stone-400 rounded-md ml-2" /><button className="px-2 py-1"><BsFillCheckSquareFill size={25} /></button></>;
    useOnClickOutside(ref, () => setValue(true));
    return (
        <SettingBlock title="Tags" header={header}>
          <div className="w-full flex flex-wrap gap-4 p-4">
            <Tag />
            <Tag />
            <Tag />
          </div>
        </SettingBlock>
    )
}

export default TagSetting