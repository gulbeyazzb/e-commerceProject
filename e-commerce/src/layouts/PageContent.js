import { Route, Switch } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export const PageContent = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/product-list" exact>
        <ProductListPage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
    </Switch>
  );
};
