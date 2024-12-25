import { WarningOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"

interface ErrorFetchingI {
    ErrorTitle: string
}

const ErrorFetching = ({
    ErrorTitle
}: ErrorFetchingI) => {
    const navigate = useNavigate();

    const refreshPage = () => {
        navigate(0)
    }
    return (
        <div className='w-full h-[50vh] flex justify-center items-center bg-[#FFE4E8] border border-[#EAECF0]'>
            <div className="space-y-6 text-center">
                <div className="text-[#89123E]">
                    <WarningOutlined className="text-[24px] p-3 mb-4" />
                    <p className="text-[16px] font-bold">{ErrorTitle}</p>
                    <p>Something went wrong that we didn’t anticipate.</p>
                </div>
                <Button
                    className="bg-white borderr border-[#EAECF0] font-bold"
                    size="large"
                    onClick={refreshPage}
                >
                    Retry
                </Button>
            </div>
        </div>
    )
}

export default ErrorFetching