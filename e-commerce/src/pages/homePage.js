import BestSeller from "../components/BestSeller";
import Clients from "../components/Clients";
import FeaturedPosts from "../components/FeaturedPosts";
import MostPopularProducts from "../components/MostPopularProducts";
import MostPopularProducts2 from "../components/MostPopularProducts2";
import ProductCards from "../components/ProductCards";
import ProductCards2 from "../components/ProductCards2";
import ShopCards from "../components/ShopCards";
import Header from "../layouts/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <ShopCards />
      <ProductCards />
      <MostPopularProducts />
      <ProductCards2 />
      <MostPopularProducts2 />
      <BestSeller />
      <Clients />
      <FeaturedPosts />
    </>
  );
}
