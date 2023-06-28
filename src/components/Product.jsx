import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`} className="product-link">
          <Card.Img src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`} className="product-link">
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <div className="my-3">
              {" "}
              <strong>${product.price}</strong>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
