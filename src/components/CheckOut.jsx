import React, { useState, useEffect, useContext, useRef } from "react"
import styled from "styled-components"
import CheckOutItems from "./CheckOutItem"

import NameInputField from "./CheckOutNameInput"
import PlaceOrderBtn from "./PlaceOrderButton"
import CheckOutInput from "./CheckoutInput"
import { Link } from "react-router-dom"
import CheckoutCoupons from "./CheckoutCoupons"
import TotalSum from "./TotalSum"
import OurHeader from "./BaseLayout"
import { ProductContext } from "../context/ProductContext"
import checkoutLogo from "../images/checkout.svg"
import CartList from "../components/CartList"

const CheckOutMainContainer = styled.div`
  background: lightgrey;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`
const CheckOutH1 = styled.img`
  margin-top: 50px;
  width: 200px;
  display: flex;
  align-self: center;
`
const CheckOutCart = styled.div`
  background: white;

  height: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  @media (min-width: 600px) {
    min-width: 300px;
    padding: 50px;
  }
`

const CartQty = styled.div`
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;

  @media (min-width: 600px) {
    margin-left: 10px;

    padding-bottom: 0px;
  }
`


// const CheckOutInputName = styled.div`
//   display: flex;
//   align-self: center;
//   padding: 50px;
//   padding-top: 20px;
//   //background: grey;
//   max-width: 100%;
//   height: 10px;
//   margin-bottom: 20px;
//   @media (min-width: 600px) {
//     padding: 50px;
//   }
// `
// const NameInputLabel = styled.label`
//   font-weight: bold;
// `
export default function CheckOut() {
  const [Loc, setLoc] = useState([])
  let [nrOfItems, setNrOfItems] = useState()
  let [totalPrice, setTotalPrice] = useState()

  const getCartItems = () => {
    const AllProducts = []
    for (let i = 0; i < localStorage.length; i++) {
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)))
      AllProducts.push(product)
      let qty = AllProducts[i].addCount
      nrOfItems = Object.keys(AllProducts).length + qty - 1
    }
    setLoc(AllProducts)
    // totalPrice = AllProducts.reduce((a, { price }) => a + price, 0)
    // setTotalPrice(totalPrice)
    setNrOfItems(nrOfItems)
  }
  
 
  
  useEffect(() => {
    getCartItems()
  }, [])

  return (
    <>
      <OurHeader>
        <CheckOutH1 src={checkoutLogo} />
        <CheckOutMainContainer>
          <CheckOutInput>
            {/* <CheckOutInputName>
              <NameInputLabel>
                Enter your name: <br />
                <NameInputField></NameInputField>
              </NameInputLabel>
            </CheckOutInputName>

            <CheckoutCoupons />

            <TotalSum />
            <PlaceOrderBtn></PlaceOrderBtn> */}
          </CheckOutInput>
          <CheckOutCart>
            <CartQty>
              {nrOfItems} Items <Link to="/CartList">Edit</Link>
            </CartQty>
            {Loc.map((product, index) => {
              if (product.name) {
                return (
                  <CheckOutItems
                    name={product.name}
                    price={product.price}
                    img={product.img}
                    key={index}
                    qty={product.addCount}
                  />
                )
              }
            })}
          </CheckOutCart>
          <CartList/>
    </CheckOutMainContainer>
      </OurHeader>
    </>
  )
}
// {nrOfItems} Items Totalprice: {totalPrice} SEK
