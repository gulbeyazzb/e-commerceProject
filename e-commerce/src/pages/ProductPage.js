import React from "react";
import NavBarDark from "../layouts/NavBarDark";
import Navbar from "../layouts/Navbar";
import ProductHeader from "../components/Product/ProductHeader";
import ProductCard from "../components/Product/ProductCard";
import ProductDescription from "../components/Product/ProductDescription";
import ProductBestSeller from "../components/Product/ProductBestSeller";
import Clients from "../components/ProductList/Clients";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { data } from "../mocks/data";

const ProductPage = () => {
  const { id } = useParams();
  const myData = data.find((product) => product.id === Number(id));

  return (
    <>
      <NavBarDark />
      <Navbar />
      <ProductHeader />
      <ProductCard myData={myData} />
      <div className="w-[1050px] mx-auto">
        <ProductDescription />
      </div>
      <ProductBestSeller />
      <Clients />
    </>
  );
};
export default ProductPage;
