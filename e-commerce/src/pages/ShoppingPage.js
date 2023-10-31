import Clients from "../components/ProductList/Clients";
import { FilterComponent } from "../components/ProductList/FilterComponent";
import ProductListShopCards from "../components/ProductList/ProductListShopCards";
import Products from "../components/ProductList/Products";
import NavBarDark from "../layouts/NavBarDark";
import NavBar from "../layouts/Navbar";
import ProductHeader from "../components/ProductList/ProductHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryActionCreator } from "../store/actions/globalAction";

const ShoppingPage = () => {
  useEffect(() => {
    dispatch(fetchCategoryActionCreator());
  }, []);
  const categories = useSelector((store) => store.global.categories);

  const dispatch = useDispatch();
  return (
    <>
      <ProductHeader />
      <ProductListShopCards categories={categories} />
      <FilterComponent />
      <Products />
      <Clients />
    </>
  );
};
export default ShoppingPage;
