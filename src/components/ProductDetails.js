import React, { useEffect } from "react";
import axios from "axios";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsAction";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="detail-container">
      {Object.keys(product).length === 0 ? (
        <div className="inlineloader">...Loading</div>
      ) : (
        <div className="main-container">
          <div className="img-container">
            <img className="img-detail" src={image} />
          </div>
          <div className="subsection">
            <h1 className="detailtitle">{title}</h1>
            <h2>
              <a className="detail-price">${price}</a>
            </h2>
            <h3 className="detail-category">{category}</h3>
            <p className="detaildescription">{description}</p>
            <div className="addcart">
              <i className="fa fa-cart-shopping"></i>
              <div> Add to Cart</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
