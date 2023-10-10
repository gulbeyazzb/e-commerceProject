import BestSeller from "../components/BestSeller";
import Clients from "../components/Clients";
import MostPopularProducts from "../components/MostPopularProducts";
import MostPopularProducts2 from "../components/MostPopularProducts2";
import ProductCards from "../components/ProductCards";
import ProductCards2 from "../components/ProductCards2";
import ShopCards from "../components/ShopCards";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Navbar";

const Main = ({}) => {
  return (
    <div>
      <NavBar />
      <Header />
      <ShopCards />
      <ProductCards />
      <MostPopularProducts />
      <ProductCards2 />
      <MostPopularProducts2 />
      <BestSeller />
      <Clients />
      <Footer />
    </div>
  );
};

export default Main;
