import { SiAddthis } from "react-icons/si"
import SettingBlock from "../SettingBlock"

const CategorySetting = () => {
    let renderListCategory = <></>;
    const handleAddCategory = () => {
        renderListCategory
    }
    return (
        <SettingBlock title="Categories">
            <div className="w-full p-4">
                { renderListCategory }
                <button><SiAddthis size={25} onClick={handleAddCategory}/></button>
            </div>
        </SettingBlock>
    )
}

export default CategorySetting