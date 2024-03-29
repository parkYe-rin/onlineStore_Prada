import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState('');
  const [minus, setMinus] = useState(0);
  const [plus, setPlus] = useState(0);

  const minusBtn = () => {
    if (minus + plus > 0) {
      setMinus(minus - 1);
    }
  };

  const plusBtn = () => {
    setPlus(plus + 1);
  };

  const pageDetails = async () => {
    let url = `http://my-json-server.typicode.com/parkYe-rin/onlineStore_Prada/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setDetails(data);
    console.log(data);
  };
  useEffect(() => {
    pageDetails();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col className="detail-img">
            <img src={details?.img} alt={details?.id} className="img-size" />
          </Col>
          <Col className="detail-etc">
            <div>{details?.title}</div>
            <div>{details?.price}</div>
            <div>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup aria-label="Second group">
                  <Button variant="outline-dark" onClick={minusBtn}>
                    -
                  </Button>
                  <Button variant="outline-dark" className="add">
                    {minus + plus}
                  </Button>
                  <Button variant="outline-dark" onClick={plusBtn}>
                    +
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </div>
            <div>
              <Button variant="outline-dark">추가</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
