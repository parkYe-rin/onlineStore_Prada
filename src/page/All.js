import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const All = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    let url = `https://my-json-server.typicode.com/parkYe-rin/onlineStore_Prada/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

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
