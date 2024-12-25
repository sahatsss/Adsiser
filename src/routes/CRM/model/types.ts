export interface MenuItemI {
    key: string;
    label: string;
}

export interface TableFilterI {
    label: string
    items: MenuItemI[];
    onChange: (checkedItems: string[]) => void;
}

export interface FilterState {
    gender: string[];
    martialStatus: string[];
    employment: string[];
}

export interface TableDataI {
    key: string;
    name: string;
    avatarURL: string
    gender: string
    dob: string
    martialStatus: string
    employment: string
}