import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import ClientTable from "../ClientTable/ClientTable"
import {useState } from "react"
import TableFilterButton from "../TableFilterButton/TableFilterButton"
import { EmploymentFilter, GenderFilter, MartialFilter } from "../../../model/TableFilterOptions"
import UseGetClientData from "../../../repository/UseGetClientData"
import useTransformClientData from "../../../usecase/UseTransformClientData"
import { FilterState } from "../../../model/types"
import useFilteredData from "../../../usecase/UseFilteredData"
import ErrorFetching from "../../../../../shared/presentations/error-fetching/ErrorFetching"

const ClientTab = () => {
    const [filters, setFilters] = useState<FilterState>({
        gender: [],
        martialStatus: [],
        employment: []
    });

    const [searchText, setSearchText] = useState<string>("");

    const handleChange = (category: keyof FilterState) => (selectedItems: string[]) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [category]: selectedItems
        }));
    };

    const { data, error, isLoading } = UseGetClientData();
    const transformedData = useTransformClientData(data);
    const filteredData = useFilteredData(transformedData, filters);


    return (
        <>
            {!error ? (
                <div className="space-y-5">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Input
                            size="large"
                            placeholder="Search"
                            prefix={<SearchOutlined />}
                            className="md:w-[40%]"
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                        />
                        <div className="flex flex-wrap gap-2 lg:gap-4">
                            <TableFilterButton items={GenderFilter} onChange={handleChange('gender')} label="Gender" />
                            <TableFilterButton items={MartialFilter} onChange={handleChange('martialStatus')} label="Martial Status" />
                            <TableFilterButton items={EmploymentFilter} onChange={handleChange('employment')} label="Employment" />
                        </div>
                    </div>
                    <ClientTable filteredData={filteredData} filteredValue={searchText} loading={isLoading} />
                </div>

            ) : (
                <ErrorFetching ErrorTitle="Opps! Unable to load profile" />
            )}
        </>

    )
}

export default ClientTab