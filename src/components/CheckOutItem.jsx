import React from "react"
import styled from "styled-components"

const CartItemMainContainer = styled.div`
  background: gray;
  width: 300px;

  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  margin: 10px;
`

const TextWrapper = styled.div``

const CartName = styled.h4``
const CartPrice = styled.p``
const CartImg = styled.img`
  width: 80px;
  height: 100px;
`

const CartQty = styled.p``


export default function CheckOutItems({ name, price, img, qty }) {
  return (
    <CartItemMainContainer>
      <CartImg src={img} />

      <TextWrapper>
        <CartPrice>{price} SEK</CartPrice>
        <CartName>{name}</CartName>
        <CartQty>Qty: {"---"}</CartQty>
      </TextWrapper>
    </CartItemMainContainer>
  )
}
