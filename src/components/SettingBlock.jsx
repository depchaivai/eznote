import PropTypes from 'prop-types';

const SettingBlock = ({ children, title, header }) => {
    return (
        <div className="border border-stone-500 rounded-md mb-14">
            <div className="flex items-center h-16 px-6 bg-slate-500 text-white">
                <h2 className="text-2xl font-bold">{title}</h2>
                { header }
            </div>
            <div className="w-full">
                {children}
            </div>  
        </div>
    )
}

SettingBlock.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    header: PropTypes.node,
};

export default SettingBlock