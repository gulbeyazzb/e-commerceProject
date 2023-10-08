import BestSeller from "../components/BestSeller";
import Clients from "../components/Clients";
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
      <ProductCards2 />
      <BestSeller />
      <Clients />
      <Footer />
    </div>
  );
};

export default Main;
