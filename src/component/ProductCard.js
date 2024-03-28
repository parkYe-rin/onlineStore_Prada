import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/product/${item?.id}`);
  };
  return (
    <div className="card-event" onClick={showDetails}>
      <img src={item?.img} alt={item?.id} className="img-size" />
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.runway === true ? 'runway' : ''}</div>
    </div>
  );
};

export default ProductCard;
