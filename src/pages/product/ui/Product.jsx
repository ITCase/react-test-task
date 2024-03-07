import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useFetch } from '../../../shared/hooks';
import { getProduct } from '../../../services/api';
import { ProductView } from '../../../widgets/product/ui';

const Product = () => {
  const params = useParams();
  const { data, isLoading, error } = useFetch(getProduct, params.id);

  if (!params?.id) return <Navigate to="/" />;

  return <ProductView product={data} isLoading={isLoading} error={error} />;
};

export default Product;
