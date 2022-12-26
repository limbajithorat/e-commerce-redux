import React from "react";
import "./ProductComponent.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="product" key={id}>
        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="title">{title}</div>
              <div className="price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
