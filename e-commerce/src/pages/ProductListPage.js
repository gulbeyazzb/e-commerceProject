import Clients from "../components/ProductList/Clients";
import { FilterComponent } from "../components/ProductList/FilterComponent";
import ProductListShopCards from "../components/ProductList/ProductListShopCards";
import Products from "../components/ProductList/Products";
import NavBarDark from "../layouts/NavBarDark";
import NavBar from "../layouts/Navbar";
import ProductHeader from "../layouts/ProductHeader";

const ProductListPage = () => {
  return (
    <>
      <NavBarDark />
      <NavBar />
      <ProductHeader />
      <ProductListShopCards />
      <div className="w-[1050px] mx-auto">
        <FilterComponent />
        <Products />
      </div>
      <Clients />
    </>
  );
};
export default ProductListPage;
