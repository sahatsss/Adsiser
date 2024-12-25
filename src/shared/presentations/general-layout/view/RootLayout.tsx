import React from 'react';

import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import CustomHeader from './presentation/CustomHeader/CustomHeader';

const { Content } = Layout;

const RootLayout: React.FC = () => {
	const {
		token: { borderRadiusLG },
	} = theme.useToken();

	/**
	 * Generating items menu to rendered
	 * only show: true will be rendered
	 */

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Layout className='bg-white'>
				<CustomHeader />
				<Content style={{ margin: '0 16px' }}>
					<div
						className='p-4 md:p-6 min-h-screen my-5'
						style={{
							borderRadius: borderRadiusLG,
						}}>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default RootLayout;
