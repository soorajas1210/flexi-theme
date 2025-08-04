import { useEffect, lazy, Suspense } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchProducts } from "../features/products/productSlice";
import TopContent from "../components/TopContent";
import Loading1 from "../components/other/loading/Loading1";

const ProductListComponent = lazy(
  () => import("../components/ProductListComponent")
);

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className=" min-h-screen">
      <TopContent />
      <Suspense fallback={<Loading1 />}>
        <ProductListComponent />
      </Suspense>
    </div>
  );
};

export default Home;
