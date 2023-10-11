import Clients from "../components/Clients";
import ProductListShopCards from "../components/ProductListShopCards";
import Products from "../components/Products";
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
      <Products />
      <Clients />
    </>
  );
};
export default ProductListPage;
