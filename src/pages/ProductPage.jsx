import React from "react";
import products from "../products";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => String(p._id) === id);

  if (!product) return null; // or fallback UI

  return (
    <>
      <Link to="/">
        <button className="btn btn-light my-3">Go back</button>
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} width={450} height={450} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <h4 style={{ textDecoration: "none", cursor: "pointer" }}>
                {product.name}
              </h4>
            </ListGroupItem>
            <ListGroupItem>
              <h5 style={{ textDecoration: "none", cursor: "pointer" }}>
                Price: ${product.price}
              </h5>
              <h6 style={{ textDecoration: "none", cursor: "pointer" }}>
                Status:{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </h6>
            </ListGroupItem>
            <br />
            <p style={{ textDecoration: "none", cursor: "pointer" }}>
              Description: {product.description}
            </p>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <Button
                disabled={product.countInStock == 0}
                className="btn-block"
                type="button"
                style={{ cursor: "pointer" }}
              >
                Add to cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default ProductPage;
