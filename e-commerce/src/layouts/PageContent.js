import { Route, Switch } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import TeamPage from "../pages/TeamPage";

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
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/product/:id" exact>
        <ProductPage />
      </Route>
      <Route path="/team" exact>
        <TeamPage />
      </Route>
    </Switch>
  );
};
