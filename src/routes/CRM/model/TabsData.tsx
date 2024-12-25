import ClientTab from "../view/presentation/ClientTab/ClientTab";
import { TabsI } from "../view/presentation/CustomTabs/type";
import PolicyTab from "../view/presentation/PolicyTab/PolicyTab";
import SupportTab from "../view/presentation/SupportTab/SupportTab";

export const TabsItems: TabsI[] = [
    {
        key: 'clients',
        label: 'Clients',
        content: <ClientTab />
    },
    {
        key: 'policy',
        label: 'Policy',
        content: <PolicyTab />
    },
    {
        key: 'support',
        label: 'Suppport',
        content: <SupportTab />
    }
]