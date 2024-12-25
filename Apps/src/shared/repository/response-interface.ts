export interface ClientResponseI {
    id: string
    key: string
    goals: ClientGoalsI
    image: string
    financials: ClientFinancialsI
    insurances: ClientInsurancesI
    clientInformation: ClientInformationI
}

export interface ClientGoalsI {
  travel: string;
  emergencyFund: string;
}

export interface ClientFinancialsI {
  debt: string;
  income: string;
  savings: string;
  cashflow: string;
  expenses: string;
  networth: string;
  investment: string;
}

export interface ClientInsurancesI {
    lifeInsurance: string
    personalAccident: string
}

export interface ClientInformationI {
    dob: string
    name: string
    gender: string
    maritalStatus: string
    employmentStatus: string
}
