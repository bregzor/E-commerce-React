import React, { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import { ProductContext } from "../context/ProductContext.js"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

const Cart = styled.section`
  background: white;
  opacity: 0.9;
  width: 320px;
  position: absolute;
  border-radius: 3px;
  padding: 20px;
  right: ${props => props.position || "0px"};
  transition: all 250ms ease-in;
  top: 60px;
  z-index: 20;
  height: 100%;
`
const ImgSize = styled.img`
  width: 150px;
  height: auto;
  object-fit: cover;
`

const CheckoutBtn = styled.button`
  width: 150px;
  height: 40px;
`

export default function CartList() {
  const [cartItems, setCartItems] = useState([])
  const { toggle } = useContext(ProductContext)

  const getAllCartItems = () => {
    const AllProducts = []
    for (let i = 0; i < localStorage.length; i++) {
      //check if product later
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)))
      AllProducts.push(product)
    }
    setCartItems(AllProducts)
  }

  useEffect(() => {
    getAllCartItems()
  }, [])

  return (
    <div>
      <Cart position={toggle}>
        <h1>CartList</h1>
        {cartItems.map((product, index) => {
          return (
            <CartItem
              name={product.name}
              price={product.price}
              img={product.img}
              key={index}
            />
          )
          //<
        })}
        <Link to={`/CheckOut/`}>
          <CheckoutBtn>Checkout</CheckoutBtn>
        </Link>
      </Cart>
    </div>
  )
}
