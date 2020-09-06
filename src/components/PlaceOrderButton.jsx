import React, { useRef } from "react"
import styled from "styled-components"

const PlaceOrderBtn = styled.button`
  margin-top: 30px;
  background: orange;
  width: 70%;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 10px;
  color: white;
  align-self: center;
  font-size: 16px;
  font-weight: bold;
margin-bottom: 20px;
  @media (min-width: 600px) {
  
  
   
  }
`

export default function PlaceOrderButton({ id, data, nameInputField }) {
  const SEND_ORDER_URL =
    "https://mock-data-api.firebaseio.com/e-commerce/orders/{3/GroupThree}.json"

  function sendOrderToApi() {
    const url = SEND_ORDER_URL
    const data = {
      name: nameInputField.current.value,
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {})
  }

  return (
    <>
      <PlaceOrderBtn onClick={sendOrderToApi}>Place Order</PlaceOrderBtn>
    </>
  )
}
