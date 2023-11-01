import Clients from "../components/ProductList/Clients";
import { FilterComponent } from "../components/ProductList/FilterComponent";
import ProductListShopCards from "../components/ProductList/ProductListShopCards";
import CategorilizeProducts from "../components/ProductList/CategorilizeProducts";
import ProductHeader from "../components/ProductList/ProductHeader";

const ProductListPage = ({ products }) => {
  return (
    <>
      <ProductHeader />
      <ProductListShopCards />
      <FilterComponent />
      <CategorilizeProducts products={products} />
      <Clients />
    </>
  );
};
export default ProductListPage;
