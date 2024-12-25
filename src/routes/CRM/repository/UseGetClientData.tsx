import { useQuery } from "react-query"
import { getAllClient } from "../../../shared/repository/clientService"

const UseGetClientData = () => {
    const getClientData = async () => {
        const data = await getAllClient()
        return data
    }

    const { data, error, isLoading } = useQuery({
        queryFn: getClientData,
        queryKey: ['client-data']
    })
    return { data, error, isLoading }
}

export default UseGetClientData