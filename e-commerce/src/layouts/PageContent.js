import { Route, Switch } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import TeamPage from "../pages/TeamPage";
import PricingPage from "../pages/PricingPage";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import ProtectedPage from "../pages/ProductedPage";
import CartPage from "../pages/CartPage";
import PageHome from "../pages/PageHome";

const PageContent = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <PageHome />
      </Route>
      <Route path="/shopping/:gender?/:category?" exact>
        <ProductListPage />
      </Route>

      <Route path="/product/:productId/:productNameSlug" exact>
        <ProductPage />
      </Route>

      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
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
export default PageContent;
