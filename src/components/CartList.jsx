import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { ProductContext } from "../context/ProductContext.js"

const Cart = styled.section`
  background: green;
  width: 320px;
  position: absolute;
  border-radius: 3px;
  padding: 20px;
  right: 0px;
  top: 80px;
`
const ImgSize = styled.img`
  width: 150px;
  height: auto;
  object-fit: cover;
`

export default function CartList() {
  const [cartItem, setCartItem] = useState([])

  const getAllCartItems = () => {
    const AllProducts = []
    for (let i = 0; i < localStorage.length; i++) {
      //check if product later
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)))
      AllProducts.push(product)
    }
    setCartItem(AllProducts)
  }

  const renderItem = product => {
    return (
      <div>
        <ImgSize src={product.img} />
        <p>name {product.name}</p>
        <p>pris {product.price} </p>
      </div>
    )
  }

  useEffect(() => {
    getAllCartItems()
  }, [])

  return (
    <div>
      <Cart>
        <h1>CartList</h1>
        {cartItem.map((product, index) => {
          return renderItem(product)
        })}
      </Cart>
    </div>
  )
}
