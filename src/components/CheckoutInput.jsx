import React, { useRef, useContext } from "react"
import CheckoutCoupons from "./CheckoutCoupons"
import TotalSum from "./TotalSum"
import styled from "styled-components"
import { ProductContext } from "../context/ProductContext"

const CheckOutInput = styled.div`
  background: white;

  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 10px;

  @media (min-width: 600px) {
    position: sticky;
    top: 0;
    min-width: 300px;
    max-width: 70%;
    height: 400px;
  }
`
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
const NameInputField = styled.input`
  margin-top: 10px;
  margin-bottom: 25px;
  height: 25px;
  width: 190px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid #1a1b1d;
`

const CheckOutInputName = styled.div`
  display: flex;
  align-self: center;
  padding: 50px;
  padding-top: 20px;
  //background: grey;
  max-width: 100%;
  height: 10px;
  margin-bottom: 20px;
  @media (min-width: 600px) {
    padding: 50px;
  }
`
const NameInputLabel = styled.label`
  font-weight: bold;
`
export default function CheckoutInput() {
  const nameInputField = useRef()

  const { product, setProduct } = useContext(ProductContext)

  const SEND_ORDER_URL =
    "https://mock-data-api.firebaseio.com/e-commerce/orders/{3/GroupThree}.json"
  
    let checkout = localStorage.getItem('checkout')
console.log(checkout)
  function sendOrderToApi() {
    const url = SEND_ORDER_URL
    const data = {
      name: nameInputField.current.value,
      products: JSON.parse(checkout),
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
      <CheckOutInput>
        <CheckOutInputName>
          <NameInputLabel>
            Enter your name: <br />
            <NameInputField ref={nameInputField} type="text"></NameInputField>
          </NameInputLabel>
        </CheckOutInputName>

        <CheckoutCoupons />

        <TotalSum />
        <PlaceOrderBtn onClick={sendOrderToApi}>Place Order</PlaceOrderBtn>
      </CheckOutInput>
    </>
  )
}
