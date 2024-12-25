import { useQuery } from "react-query"
import { getClientById } from "../../../shared/repository/clientService"

const UseGetClientDataById = (id: string) => {
    const getIndividualClientData = async () => {
        const data = await getClientById(id)
        return data
    }

    const { data, error, isLoading } = useQuery({
        queryFn: getIndividualClientData,
        queryKey: ['individual-client-data']
    })
    return { data, error, isLoading }
}

export default UseGetClientDataById