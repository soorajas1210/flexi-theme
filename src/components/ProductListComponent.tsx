import { useAppSelector } from "../app/hooks";
import ListCard from "./cards/ListCard";
import Loading1 from "./other/loading/Loading1";
import { motion } from "motion/react";

const productListStyles: Record<string, string> = {
  default: "grid grid-cols-1 lg:grid-cols-2 gap-5",
  dark: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5",
  colorful:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5",
};

const ProductListComponent = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  if (loading)
    return (
      <div className="px-4 sm:px-10 md:px-16 lg:px-20 py-16 flex items-baseline justify-center">
        <Loading1 />
      </div>
    );
  if (error)
    return (
      <div className="px-4 sm:px-10 md:px-16 lg:px-20 py-16">
        Error: {error}
      </div>
    );

  return (
    <div className="space-y-6 px-4 sm:px-10 md:px-16 lg:px-20 py-16 text-2xl">
      <h3 className="font-semibold">Shop Now</h3>
      <div className={productListStyles[currentTheme]}>
        {products?.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
            className="mt-5"
          >
            <ListCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductListComponent;
