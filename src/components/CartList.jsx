import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ProductContext } from "../context/ProductContext.js"
import styled from "styled-components"
import CartItem from "./CartItem"
import TotalSum from './TotalSum';


const Cart = styled.section`
  background: white;
  opacity: 0.9;
  width: 320px;
  position: fixed;
  border-radius: 3px;
  padding: 20px;
  right: ${props => props.position || "0px"};
  transition: all 250ms ease-in;
  top: 80px;
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
  const { toggle, lsRender } = useContext(ProductContext)

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
  }, [lsRender])

  return (
    <div>
      <Cart position={toggle}>
        <h1>CartList</h1>
        {cartItems.map((product, index) => {
          return (
            <CartItem
              name={product.name}
              price={product.price}
              id={product.id}
              quantity={product.quantity}
              img={product.img}
              key={index}
              render = { getAllCartItems }
            />
          )
          //<
        })}
        <Link to={`/CheckOut/`}>
          <CheckoutBtn>Checkout</CheckoutBtn>
        </Link>
        <CheckoutBtn onClick={ (e) => localStorage.clear()}>Clear All</CheckoutBtn>
        <TotalSum/>
      </Cart>
    </div>
  )
}
