import React from "react"
import styled from "styled-components"

const CartItemMainContainer = styled.div`
  height: 80px;
  border-bottom: 1px solid orange;
  display: flex;
  flex-direction: row;
padding-top:10px;
  @media (min-width: 600px) {
    height: 110px;
    margin: 10px;
    padding-top:0px;
  }
`

const TextWrapper = styled.div`
  @media (min-width: 600px) {
    padding-top: 30px;
  }
`

const CartName = styled.h4`
  font-size: 12px;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`
const CartPrice = styled.p`
  font-size: 12px;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`

const CartImg = styled.img`
  width: 50px;
  height: 70px;
  margin-right: 20px;
  @media (min-width: 600px) {
    width: 80px;
    height: 100px;
    margin-right: 20px;
  }
`

const CartQty = styled.p`
  font-size: 12px;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`

export default function CheckOutItems({ name, price, img, qty }) {
  return (
    <CartItemMainContainer>
      <CartImg src={img} />

      <TextWrapper>
        <CartPrice>{price} SEK</CartPrice>
        <CartName>{name}</CartName>
        <CartQty>Qty: {qty}</CartQty>
      </TextWrapper>
    </CartItemMainContainer>
  )
}
