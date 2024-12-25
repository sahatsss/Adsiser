import { ClientInformationI } from "../../../../../shared/repository/response-interface"

const ClientInformationCard = ({
    dob,
    gender,
    maritalStatus,
    employmentStatus
}: ClientInformationI) => {
    return (
        <div className="w-full px-6 py-5 rounded-lg bg-[#F9FAFB]">
            <div className="flex flex-wrap justify-evenly sm:justify-normal items-start gap-14">
                <div className="space-y-2">
                    <p className="text-[#667085]">Gender</p>
                    <p className="text-[#475467]">{gender}</p>
                </div>
                <div className="space-y-2">
                    <p className="text-[#667085]">DOB</p>
                    <p className="text-[#475467]">{dob}</p>
                </div>
                <div className="space-y-2">
                    <p className="text-[#667085]">Marital Status</p>
                    <p className="text-[#475467]">{maritalStatus}</p>
                </div>
                <div className="space-y-2">
                    <p className="text-[#667085]">Employment</p>
                    <p className="text-[#475467]">{employmentStatus}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientInformationCard