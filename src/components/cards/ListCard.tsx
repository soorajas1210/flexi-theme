import { useAppSelector } from "../../app/hooks";
import type { Product } from "../../types/products";
import DefaultButton from "../buttons/DefaultButton";

interface Props {
  product: Product;
}

const cardOutlineStyles: Record<string, string> = {
  default: " mx-auto",
  dark: "max-w-xs mx-auto",
  colorful: "max-w-xs mx-auto",
};
const cardStyles: Record<string, string> = {
  default:
    "shadow-lg transform transition duration-300 flex flex-col sm:flex-row  border border-slate-300 bg-white text-gray-800",
  dark: "relative group rounded-2xl overflow-hidden shadow-lg transform transition duration-300  border border-gray-700 bg-gray-900 text-white",
  colorful:
    "relative group rounded-2xl overflow-hidden shadow-2xl transform transition duration-300  border border-slate-300 bg-white",
};

const ListCard = ({ product }: Props) => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  return (
    <div className={cardOutlineStyles[currentTheme]}>
      <div
        className={`group rounded-2xl overflow-hidden  py-3 transition duration-300 ${
          cardStyles[currentTheme] ?? cardStyles.default
        }`}
      >
        {/* Image section */}
        <div className="overflow-hidden">
          <img
            src={product.images[0]}
            alt="Product"
            className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content section */}
        <div
          className={`px-4 py-3 space-y-3 flex flex-col  ${
            currentTheme === "default"
              ? "justify-end items-start pl-10"
              : "items-center"
          }`}
        >
          <div
            className={`flex  flex-col items-center  ${
              currentTheme === "default" ? "items-start" : "items-center"
            }`}
          >
            <h3 className={`font-semibold text-lg`}>{product.title}</h3>
            {currentTheme === "default" && (
              <>
                <p className={`text-base`}>
                  <span className="font-semibold">Brand:</span> {product.brand}
                </p>
                <p className={`text-base`}>
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </p>
              </>
            )}
            <p className={`text-md font-medium `}>₹{product.price}</p>
          </div>

          <div className="">
            <DefaultButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
