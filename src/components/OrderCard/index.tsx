import { XMarkIcon } from "@heroicons/react/20/solid";

interface OrderCardProps {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  handleDelete?: (id: number) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  id,
  title,
  imageUrl,
  price,
  handleDelete,
}) => {
  let renderXMarkIcon;

  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        onClick={() => handleDelete(id)}
        className="h-6 w-6 text-black cursor-pointer"
      />
    );
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;
