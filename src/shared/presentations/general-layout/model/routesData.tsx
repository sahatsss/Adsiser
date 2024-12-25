import { DesktopOutlined } from '@ant-design/icons';
import { ItemsDataI } from './types';
import CRMContainer from '../../../../routes/CRM/view/CRMContainer';

export const staffRoutes: ItemsDataI[] = [
	{
		label: 'CRM',
		key: '/crm',
		path: '/crm',
		children: [],
		icon: <DesktopOutlined />,
		components: <CRMContainer />,
		show: true,
	},
];
