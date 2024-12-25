import { useMemo } from "react";
import { FilterState, TableDataI } from "../model/types";

const useFilteredData = (transformedData: TableDataI[], filters: FilterState) => {
    const filteredData = useMemo(() => {
        let result = transformedData;

        if (filters.gender.length > 0) {
            result = filterByGender(result, filters.gender);
        }
        if (filters.martialStatus.length > 0) {
            result = filterByMartialStatus(result, filters.martialStatus);
        }
        if (filters.employment.length > 0) {
            result = filterByEmployment(result, filters.employment);
        }
        return result;
    }, [transformedData, filters]);

    return filteredData;
};

const filterByGender = (data: TableDataI[], genders: string[]) => {
    return data.filter(({ gender }) => genders.includes(gender));
};

const filterByMartialStatus = (data: TableDataI[], martialStatuses: string[]) => {
    return data.filter(({ martialStatus }) => martialStatuses.includes(martialStatus));
};

const filterByEmployment = (data: TableDataI[], employments: string[]) => {
    return data.filter(({ employment }) => employments.includes(employment));
};

export default useFilteredData