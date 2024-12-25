import { useState, useEffect } from "react";
import { CustomHeaderMenuI } from "./types";
import { Link, useLocation } from "react-router-dom";

const CustomHeaderMenu = ({
    label,
    path
}: CustomHeaderMenuI) => {
    const [isCurrentPath, setIsCurrentPath] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const isActive = currentPath === path || currentPath.startsWith(`${path}/`);
        setIsCurrentPath(isActive);
    }, [location.pathname, path]);

    return (
        <li className={`${isCurrentPath ? 'bg-[#F9FAFB]' : ''} px-3 py-2 font-semibold rounded-md leading-none`}>
            <Link to={path} replace={true}>
                {label}
            </Link>
        </li>
    );
};

export default CustomHeaderMenu;
