import React from 'react';
import ProductDetails from '../page/ProductDetails';
import { Navigate } from 'react-router-dom';

const PrivatePage = ({ authenticate }) => {
  return authenticate === true ? <ProductDetails /> : <Navigate to="/login" />;
};

export default PrivatePage;
