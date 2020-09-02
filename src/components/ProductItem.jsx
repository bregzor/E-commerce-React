import React from "react";
import styled from 'styled-components';

const ProductArticle = styled.article`
  min-width: 300px;
  max-width:350px;
  border-radius: 15px;
  background: gray;
  margin:20px;
`;

const ProductImgWrapper = styled.div`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

const ProductInfoContainer = styled.div``;

export default function ProductItem({name, img, desc, price}) {
  return (
	
    <ProductArticle>
      <ProductImgWrapper>
        <img width="100%" src={img} />
      </ProductImgWrapper>
      <ProductInfoContainer>
		  <h3>{name}</h3>
		  <p>{desc}</p>
		  <label>{price} SEK</label>
	  </ProductInfoContainer>
    </ProductArticle>
  );
}
