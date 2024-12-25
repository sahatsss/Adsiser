export interface TabsI {
    key: string;
    label: string;
    content: React.ReactNode;
}

export interface CustomTabsI {
    tabs: TabsI[];
    defaultIndex?: number;
}
