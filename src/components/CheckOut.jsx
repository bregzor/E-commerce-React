import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CheckOutItems from "./CheckOutItem"

import NameInputField from './CheckOutNameInput'
import PlaceOrderBtn from "./PlaceOrderButton"
import { Link } from "react-router-dom"

const CheckOutMainContainer = styled.div`
  background: green;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: left;
  margin-left: 100px;
  padding-top: 40px;
  padding-bottom: 40px;
`
const CheckOutH1 = styled.h1`
  width: 100%;
  background: red;
`
const CheckOutCart = styled.div`
  background: lightgrey;
  min-width: 300px;
  max-width: 70%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 50px 0px 0px 600px;
  padding: 50px;
`

const CartQty = styled.div``
const CheckOutInput = styled.div`
  position: fixed;

  background: limegreen;
  min-width: 300px;
  max-width: 70%;
  height: 400px;
  display: flex;
  flex-direction: column;

  margin: 50px;
`

const CheckOutInputName = styled.div`
  padding: 50px;
  background: grey;
  max-width: 100%;
  height: 10px;
  margin-bottom: 20px;
`

const OrderTotal = styled.div``

export default function CheckOut() {
  
  const [Loc, setLoc] = useState([])
  let [nrOfItems, setNrOfItems] = useState()
  let [totalPrice, setTotalPrice] = useState()

  const getCartItems = () => {
    const AllProducts = []
    for (let i = 0; i < localStorage.length; i++) {
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)))
      AllProducts.push(product)
    }
    setLoc(AllProducts)
    totalPrice = AllProducts.reduce((a, { price }) => a + price, 0)
    setTotalPrice(totalPrice)
    nrOfItems = Object.keys(AllProducts).length
    setNrOfItems(nrOfItems)
  }

  useEffect(() => {
    getCartItems()
  }, [])

  return (
    <>
      <CheckOutH1>Checkout</CheckOutH1>
      <CheckOutMainContainer>
        <CheckOutInput>
          <CheckOutInputName>
            <label>
              Enter your name:
              <NameInputField></NameInputField>
            </label>
             
      
         
          </CheckOutInputName>
          <OrderTotal>
            {nrOfItems} Items Totalprice: {totalPrice} SEK
          </OrderTotal>
          <PlaceOrderBtn></PlaceOrderBtn>
        </CheckOutInput>
        <CheckOutCart>
          <CartQty>
            {nrOfItems} Items <Link to="/CartList">Edit</Link>
          </CartQty>
          {Loc.map((product, index) => {
            return (
              <CheckOutItems
                name={product.name}
                price={product.price}
                img={product.img}
                key={index}
              />
            )
          })}
        </CheckOutCart>
      </CheckOutMainContainer>
    </>
  )
}
