import { List } from "antd";

const ClientFinancialCard = ({ dataSource }: { dataSource: { label: string; value: string }[] }) => {
    return (
        <List
            dataSource={dataSource}
            bordered={true}
            renderItem={(item) => (
                <List.Item className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span>${item.value}</span>
                </List.Item>
            )}
        />
    );
};

export default ClientFinancialCard;
