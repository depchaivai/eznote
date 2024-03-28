import CategorySetting from "../../components/settings/CategorySetting";
import TagSetting from "../../components/settings/TagSetting";

const Settings = () => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl p-10">Settings</h1>
      <div className="p-10">
        <CategorySetting/>
        <TagSetting/>
      </div>

    </div>
  )
}

export default Settings