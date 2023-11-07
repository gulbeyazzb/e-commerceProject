import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";

export default function Pagination({ products }) {
  console.log(products.total);
  const dispatch = useDispatch();

  return (
    <div>
      <InfiniteScroll>
        {products?.products.map((p) => p.description)}
      </InfiniteScroll>
    </div>
  );
}
