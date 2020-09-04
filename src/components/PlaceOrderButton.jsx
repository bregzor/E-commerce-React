import React, { useRef } from "react"
import styled from "styled-components"


const PlaceOrderBtn = styled.button`
  padding: 50px;
  background: red;
  max-width: 100%;
  height: 10px;
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
