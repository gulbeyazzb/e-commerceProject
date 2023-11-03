import { Route, Switch } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import TeamPage from "../pages/TeamPage";
import PricingPage from "../pages/PricingPage";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import ProtectedPage from "../pages/ProductedPage";
import CartPage from "../pages/CartPage";
import ShoppingPage from "../pages/ShoppingPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductActionCreator } from "../store/actions/productAction";

export const PageContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductActionCreator());
  }, []);

  const products = useSelector((store) => store.product.productList);

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/shopping/:categoryID">
        <ProductListPage />
      </Route>
      <Route path="/shopping" exact>
        {/* <ShoppingPage products={products} /> */}
        <ProductListPage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/product/:id" exact>
        <ProductPage />
      </Route>
      <Route path="/team" exact>
        <TeamPage />
      </Route>
      <Route path="/pricing" exact>
        <PricingPage />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/cart" exact>
        <ProtectedPage PageComponent={CartPage} fromURL={"/cart"} />
      </Route>
    </Switch>
  );
};
