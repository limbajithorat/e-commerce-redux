import React, { useEffect } from "react";
import "./ProductListing.css";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productsAction";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
