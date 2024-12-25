import { Button } from "antd"

interface ClientFutureFinancialCardI {
  type: 'Goals' | 'Insurances'
  label: string
  amount: string
  image: string
}

const ClientFutureFinancialCard = ({
  type,
  label,
  amount,
  image
}: ClientFutureFinancialCardI) => {
  return (
    <div className="flex items-center justify-between p-6 border border-[#EAECF0] rounded-xl w-full">
      <div className="flex items-center gap-3">
        <img className="size-12 rounded-full" src={image} alt={`${label} image`} />
        <div>
          <p className="font-bold text-[16px]">{label}</p>
          {type === 'Insurances' ? (
            <p>Plan A . ${amount}</p>
          ) : (
            <p>${amount}</p>
          )}
        </div>
      </div>
      <Button className="bg-white border border-[#D0D5DD]">
        {type === 'Goals' ? (
          <span>Edit</span>
        ) : (
          <span>View insurance</span>
        )}
      </Button>
    </div>
  )
}

export default ClientFutureFinancialCard