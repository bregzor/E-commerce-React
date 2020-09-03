import React from "react"
import styled from "styled-components"
import AddToCartButton from "./AddToCartButton"
import { Link } from "react-router-dom"

const ProductArticle = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  max-width: 350px;
  border-radius: 15px;
  background: gray;
  margin: 20px;
  color: white;
  transition: border 500ms ease-in;
  border: 0;
  &:hover {
    transition: border 500ms ease-in;
    border: 1px solid orange;
  }
`

const ProductImgWrapper = styled.div`
  width: 100%;
  height: 250px;
  object-fit: contain;
  overflow: hidden;
  position: relative;
  top: -10px;
`

const ProductName = styled.h3`
  text-transform: uppercase;
`

const ProductInfoContainer = styled.div`
  padding: 20px;
`

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 24px;
  text-align: right;
`

export default function ProductItem({ name, img, desc, price, id }) {
  // const addItemToLocalStorage = () => {
  //   localStorage.setItem(
  //     `product_${id}`,
  //     JSON.stringify()
  //   );
  // };

  return (
    <ProductArticle>
      <AddToCartButton data={{ name: name, img: img, price: price }} id={id} />
      <Link to={`/product/${id}`}>
        <ProductImgWrapper>
          <img width="100%" src={img} />
        </ProductImgWrapper>
      </Link>
      <ProductInfoContainer>
        <ProductName>{name}</ProductName>
        <p>{desc}</p>
        <ProductPrice>{price} SEK</ProductPrice>
      </ProductInfoContainer>
    </ProductArticle>
  )
}
