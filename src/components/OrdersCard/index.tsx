import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface OrdersCardProps {
  totalPrice: number;
  totalProducts: number;
}

const OrdersCard: React.FC<OrdersCardProps> = ({
  totalPrice,
  totalProducts,
}) => {

  const currentDate = new Date();
  return (
    <div className="flex justify-between items-center border rounded-lg border-black w-80 p-4 mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">{currentDate.toDateString()}</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice.toFixed(2)}</span>
            <ChevronRightIcon className="h-6 cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
