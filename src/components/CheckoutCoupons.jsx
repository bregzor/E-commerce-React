import React, { useEffect, useState, useRef, useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import styled from "styled-components"
const DiscountInputContainer = styled.div`
display: flex;
align-self: center;
padding-bottom: 50px;
//background: grey;
max-width: 100%;
height: 10px;
margin-bottom: 30px;
font-weight: bold;

@media (min-width: 600px) {
    margin-bottom: 60px;
  }

`
const DiscountInputLabel = styled.label`

font-weight: bold;

`
const DiscountInputField = styled.input`

margin-top: 10px;
height: 25px;
width: 155px;
padding-left: 5px;
border-radius: 5px 0px 0px 5px;
border: 1px solid #1a1b1d;

`
const DiscountBtn = styled.button`
height: 27px;
cursor:pointer;
margin-left:-1px;
padding-right:5px;
padding-left:5px;
background:orange;
color:white;
border-radius: 5px;
border: 1px solid #1a1b1d;
border-radius: 0px 5px 5px 0px;
`


export default function CheckoutCoupons() {
  let [coupons, setCoupons] = useState({})
  let { sum, setSum } = useContext(ProductContext)
  let discountValue = useRef()
  let discButton = useRef();
  let totalSum = 0

  const fetchCoupons = () => {
    fetch(`https://mock-data-api.firebaseio.com/e-commerce/couponCodes.json`)
      .then(res => res.json())
      .then(data => {
        setCoupons(data)
      })
  }

  useEffect(() => {
    fetchCoupons()
  }, [])

  const calDiscount = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)))
      const count = product.addCount
      const productPrice = product.price
      let productXCount = productPrice * count

      if (product.name) {
        sum += parseInt(productXCount)
      }
    }

    Object.entries(coupons).map((item, index) => {
      const code = item[0]
      const discount = item[1].discount

      if (discountValue.current.value.toUpperCase() == code) {
        totalSum = Math.floor(sum * discount)
        setSum(totalSum)
        discButton.current.disabled = "disabled";
      } else {
        console.log("Wrong code");
      }
    
    })
  }

  return (
    <DiscountInputContainer>
      <DiscountInputLabel>Discount <br/>
      <DiscountInputField
        ref={discountValue}
        type="text"
        placeholder="Enter your discount code"
      />

      <DiscountBtn ref={discButton}  onClick={() => calDiscount(discountValue.current.value)}>
        Add
      </DiscountBtn>
      </DiscountInputLabel>
      {/* <p>Total med discount: {sum} </p> */}
    </DiscountInputContainer>
  )
}
