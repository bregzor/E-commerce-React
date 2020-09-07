import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ProductContext } from "../context/ProductContext.js"
import styled from "styled-components"
import CartItem from "./CartItem"
import TotalSum from "./TotalSum"

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

const CartHeader = styled.h3`
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`

const ImgSize = styled.img`
  width: 150px;
  height: auto;
  object-fit: cover;
`

const CheckoutBtn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  outline: none;
  cursor: pointer;
  background: orange;
  color: white;
  margin-top: 20px;
`

const CheckOutWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  align-items: center;
  position:fixed;
  bottom:40px;
  padding:10px;
  border-top:1px solid black;
`

export default function CartList() {

  const [cartItems, setCartItems] = useState([])
  const { toggle, lsRender, setlsRender } = useContext(ProductContext)

  const getAllCartItems = () => {
    const AllProducts = []

    for (let i = 0; i < localStorage.length; i++) {
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)))
      AllProducts.push(product)
    }
    setCartItems(AllProducts)
  }

  const clearAll = () => {
    localStorage.clear()
    setlsRender(lsRender + 1);
  }

  const checkOutOrder = () => {
    localStorage.setItem("checkout", JSON.stringify(cartItems))
  }

  useEffect(() => {
    getAllCartItems()
  }, [lsRender])

  return (
    <div>
      <Cart position={toggle}>
        <CartHeader>CART</CartHeader>
        {cartItems.map((product, index) => {
          if (product.name) {
            return (
              <CartItem
                name={product.name}
                price={product.price}
                id={product.id}
                quantity={product.quantity}
                img={product.img}
                key={index}
                renderCart={getAllCartItems}
                addCount={product.addCount}
              />
            )
          }
        })}
        <CheckOutWrapp>
          <Link to={`/CheckOut/`}>
            <CheckoutBtn>Checkout</CheckoutBtn>
          </Link>
          <CheckoutBtn onClick={clearAll}>Clear All</CheckoutBtn>
          <TotalSum />
        </CheckOutWrapp>

      </Cart>
    </div>
  )
}
