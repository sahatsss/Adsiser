import { useState } from 'react';
import { Checkbox, Button, Menu } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { TableFilterI } from '../../../model/types';

const TableFilterButton = ({ label, items, onChange }: TableFilterI) => {
    const [isOpen, setIsOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    const handleItemClick = (key: string) => {
        const currentIndex = checkedItems.indexOf(key);
        const newCheckedItems = [...checkedItems];

        if (currentIndex === -1) {
            newCheckedItems.push(key);
        } else {
            newCheckedItems.splice(currentIndex, 1);
        }

        setCheckedItems(newCheckedItems);
        onChange(newCheckedItems);
        setTimeout(() => {
            setIsOpen(false)
        }, 300);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <Button className="border border-[#EAECF0] bg-[#F9FAFB] px-3 py-1 w-fit" shape="round" onClick={toggleDropdown}>
                <div className="flex items-center gap-1">
                    <PlusCircleOutlined />
                    {label}
                </div>
            </Button>
            {isOpen && (
                <Menu className='absolute top-[40px] z-10'>
                    {items.map(item => (
                        <Menu.Item key={item.key}>
                            <Checkbox
                                checked={checkedItems.includes(item.key)}
                                onChange={() => handleItemClick(item.key)}
                            >
                                {item.label}
                            </Checkbox>
                        </Menu.Item>
                    ))}
                </Menu>
            )}
        </div>
    );
};

export default TableFilterButton;
