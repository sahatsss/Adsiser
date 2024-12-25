// useTransformClientData.ts

import { ClientResponseI } from "../../../shared/repository/response-interface";
import { TableDataI } from "../model/types";

const useTransformClientData = (clientData: ClientResponseI[] | undefined): TableDataI[] => {
    if (!clientData) return [];

    return clientData.map(client => ({
        key: client.id,
        name: client.clientInformation.name,
        avatarURL: client.image,
        gender: client.clientInformation.gender,
        dob: client.clientInformation.dob,
        martialStatus: client.clientInformation.maritalStatus,
        employment: client.clientInformation.employmentStatus
    }));
};

export default useTransformClientData;
