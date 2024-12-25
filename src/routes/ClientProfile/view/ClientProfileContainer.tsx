import Title from "antd/es/typography/Title"
import UseGetClientDataById from "../repository/UseGetClientDataById"
import { useParams } from "react-router-dom";
import ProfileSkeleton from "./presentation/ProfileSkeleton/ProfileSkeleton";
import { Divider } from "antd";
import ErrorFetching from "../../../shared/presentations/error-fetching/ErrorFetching";
import ClientInformationCard from "./presentation/ClientInformationCard/ClientInformationCard";
import ClientFinancialCard from "./presentation/ClientFinancialCard/ClientFinancialCard";
import EmergencyFund from '../../../assets/header_navbar.jpg'
import AvatarPurple from '../../../assets/avatar_purple.jpg'
import ClientFutureFinancialCard from "./presentation/ClientFutureFinancialCard/ClientFutureFinancialCard";

const ClientProfileContainer = () => {
  const { id } = useParams<{ id?: string }>();
  const decreasedId = parseInt(id ?? "0") - 1;

  const { data, error, isLoading } = UseGetClientDataById(decreasedId.toString());

  const financialData = Object.entries(data?.financials ?? {}).map(([label, value]) => ({
    label,
    value,
  }));


  return (
    <>
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <>
          {!error ? (
            <div>
              {data && (
                <>
                  <Title>{data?.clientInformation.name}</Title >
                  <Divider />
                  <ClientInformationCard {...data.clientInformation} />
                  <Title level={3} className="mt-7">Financials</Title>
                  <Divider />
                  <ClientFinancialCard dataSource={financialData} />
                  <Title level={3} className="mt-7">Goals</Title>
                  <Divider />
                  <div className="flex flex-col md:flex-row justify-between gap-[30px]">
                    <ClientFutureFinancialCard
                      type="Goals"
                      label="Emergency Fund"
                      amount={data.goals.emergencyFund}
                      image={EmergencyFund}
                    />
                    <ClientFutureFinancialCard
                      type="Goals"
                      label="Travel"
                      amount={data.goals.travel}
                      image={AvatarPurple}
                    />
                  </div>
                  <Title level={3} className="mt-7">Insurances</Title>
                  <Divider />
                  <div className="flex flex-col md:flex-row justify-between gap-[30px]">
                    <ClientFutureFinancialCard
                      type="Insurances"
                      label="Life Insurance"
                      amount={data.insurances.lifeInsurance}
                      image={AvatarPurple}
                    />
                    <ClientFutureFinancialCard
                      type="Insurances"
                      label="Personal Accident"
                      amount={data.insurances.personalAccident}
                      image={AvatarPurple}
                    />
                  </div>
                </>
              )}
            </div >
          ) : (
            <ErrorFetching ErrorTitle="Opps! Unable to load profile" />
          )}
        </>
      )}
    </>
  )
}

export default ClientProfileContainer