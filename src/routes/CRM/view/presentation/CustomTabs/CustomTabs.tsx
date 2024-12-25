import { useState } from "react";
import { CustomTabsI } from "./type"

const CustomTabs = ({
    tabs,
    defaultIndex = 0
}: CustomTabsI) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(defaultIndex);

    const handleClick = (index: number) => {
        setActiveTabIndex(index);
    };
    
    return (
        <div className="flex flex-col gap-5">
            <ul className="flex space-x-4">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`${activeTabIndex === index ? 'bg-[#EFF8FF] text-[#175CD3]' : 'text-[#667085]'} font-semibold px-3 py-2 rounded-lg cursor-pointer`}
                        onClick={() => handleClick(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="px-2">
                {tabs[activeTabIndex].content}
            </div>
        </div>
    )
}

export default CustomTabs