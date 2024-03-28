import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const All = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:3004/parkYe-rin/onlineStore_Prada/products`;
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container className="container">
        <Row>
          {productList.map((n) => (
            <Col lg={3} md={12}>
              <ProductCard item={n} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default All;
