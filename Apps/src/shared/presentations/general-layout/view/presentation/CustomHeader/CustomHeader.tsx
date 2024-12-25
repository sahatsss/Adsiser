import { Header } from 'antd/es/layout/layout';
import Logo from '../../../../../../assets/logo.png'
import { navMenu } from '../../../../../../data/nav-menu';
import CustomHeaderMenu from '../CustomHeaderMenu/CustomHeaderMenu';
import { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import Avatar from '../../../../../../assets/header_navbar.jpg'
import { Button, Drawer } from 'antd';
import { useState } from 'react';

export default function CustomHeader() {

	const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

	const showDrawer = () => {
		setIsOpenDrawer(true);
	};

	const onClose = () => {
		setIsOpenDrawer(false);
	};
	return (
		<>
			<Header className="bg-white flex items-center justify-between py-4 px-4 sm:px-[50px]">
				<div>
					<Button onClick={showDrawer} type='text' className='flex lg:hidden text-[20px] text-[#667085] cursor-pointer'>
						{isOpenDrawer ? (<MenuFoldOutlined />) : (<MenuUnfoldOutlined />)}
					</Button>
					<div className='hidden lg:flex items-center gap-4 '>
						<img src={Logo} alt='Company Logo' />
						<ul className='flex items-center gap-2 list-none'>
							{navMenu.map((item) => (
								<CustomHeaderMenu {...item} />
							))}
						</ul>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-1 sm:gap-2'>
						<SearchOutlined className='p-2 sm:p-[10px] text-[16px] sm:text-[20px] text-[#667085] cursor-pointer' />
						<SettingOutlined className='p-2 sm:p-[10px] text-[16px] sm:text-[20px] text-[#667085] cursor-pointer' />
						<BellOutlined className='p-2 sm:p-[10px] text-[16px] sm:text-[20px] text-[#667085] cursor-pointer' />
					</div>
					<img src={Avatar} alt='User Avatar' className='size-8 sm:size-10 rounded-full aspect-square cursor-pointer ' />
				</div>
			</Header>
			<Drawer
				title={<img src={Logo} alt='Company Logo' />}
				placement="left"
				closable={false}
				onClose={onClose}
				open={isOpenDrawer}
				width="80%"
			>
				<ul className='list-none space-y-4'>
					{navMenu.map((item) => (
						<CustomHeaderMenu {...item} />
					))}
				</ul>
			</Drawer>
		</>
	);
}
