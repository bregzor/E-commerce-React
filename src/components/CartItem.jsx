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

const Stepper = styled.input`
width:30px;
height:20px;
`

const CartButtonContainer = styled.div`
	width:100%;
	display:flex;
	height:50px;
	background:black;
`

export default function CartItem({ name, price, img }) {
  return (
    <CartItemContainer>
      <CartImg src={img} />
      <CartName>{name}</CartName>
      <CartPrice>{price}</CartPrice>

	  <Stepper type="number"/>
	  <button>X</button>
    </CartItemContainer>
  );
}
