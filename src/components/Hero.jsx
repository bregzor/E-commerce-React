import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../context/ProductContext.js";

const HeroImg = styled.img`
  min-width: 100%;
  min-height:330px;
  max-height: 330px;
  object-fit: cover;
`

const HeroHeader = styled.h2`
  color: white;
  position: absolute;
  margin: auto;
  min-width: min-content;
  text-align: center;
  width: 100%;
  top: 30vh;
  text-shadow: 2px 2px 2px darkgray;
`;

const HeroWrapper = styled.section`
  height:330px;
  background:black;
`

export default function Hero() {

  const { products } = useContext(ProductContext);
  const productsArray = Object.entries(products);
  const randomProduct =
    productsArray[Math.floor(Math.random() * productsArray.length)];

  return (
   <HeroWrapper>
      <HeroHeader>
        OUR PRODUCTS
      </HeroHeader>
      {randomProduct && <HeroImg src={randomProduct[1].images[0].src.medium} />}
</HeroWrapper>
  );
}
