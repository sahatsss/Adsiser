import React from 'react';

import { MenuItem } from '../model/types';
import { staffRoutes } from '../model/routesData';
import { useNavigate } from 'react-router-dom';
import useMapRoutes from '../../../usecase/useMapRoutes';

export type actionType = 'manage' | 'staff';

const UseGenerateItems = () => {
	const navigate = useNavigate();
	const { getUserType } = useMapRoutes();
	const type = getUserType();

	const whichData = type === 'staff' ? staffRoutes : staffRoutes;

	function getItem(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[]
	): MenuItem {
		return {
			key,
			icon,
			children,
			label,
		} as MenuItem;
	}

	const handleClickMenu = (path: string) => {
		navigate(path);
	};

    const items: MenuItem[] = whichData.map((data) => {
        const childrens: MenuItem[] = data.children.map((child) => ({
            ...child,
            key: child.key.toString(), // Ensure key is a string
        }));

        return getItem(data.label, data.key, data.icon, childrens);
    });
	return { items, handleClickMenu };
};

export default UseGenerateItems;
