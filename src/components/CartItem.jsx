import React from "react";
import styled from "styled-components";

const CartItemContainer = styled.div`
  background: gray;
  width: 100%;
  border-bottom: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;

const CartName = styled.h4``;
const CartPrice = styled.p``;
const CartImg = styled.img`
width: 60px;
`;

export default function CartItem({ name, price, img }) {
  return (
    <CartItemContainer>
      <CartImg src={img} />
      <CartName>{name}</CartName>
      <CartPrice>{price}</CartPrice>
	  <button>X</button>
    </CartItemContainer>
  );
}
