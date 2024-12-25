const useConvertQuery = <T extends Record<string, string | number | boolean>>() => {
    function objectToQueryParams(obj: T): string {
        return Object.entries(obj)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`)
            .join('&');
    }
    return { objectToQueryParams };
};

export default useConvertQuery;
