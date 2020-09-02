import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import styled from 'styled-components';

const ProductsWrapper = styled.section`
display:flex;
justify-content:center;
flex-wrap:wrap;
`

export default function ProductList() {
  const { products, setProduct } = useContext(ProductContext);

  return (
    <ProductsWrapper>
      {Object.entries(products).map((item, index) => {
		const id = item[0];
		const product = item[1];
	    return (
          <Link to={`/product/${id}`}>
            <ProductItem
              key={index}
              name={product.name}
              desc={product.description}
              price={product.price}
              img={product.images[0].src.small}
            />
          </Link>
        );
      })}
	  </ProductsWrapper>
  );
}
