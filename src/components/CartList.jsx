import React, { useContext } from "react"
import styled from "styled-components"
import { ProductContext } from "../context/ProductContext.js"

const Cart = styled.section`
  background: green;
  width: 320px;
  position: absolute;
  border-radius: 3px;
  padding: 20px;
  right: 0px;
  top: 60px;
`
const ImgSize = styled.img`
  width: 150px;
  heigth: auto;
  object-fit: cover;
`

export default function CartList() {
  const { products, setProducts } = useContext(ProductContext)
  console.log("products: ", products)
  console.log("Object.entries: ", Object.entries(products))

  const getAllCartItems = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const product = localStorage.getItem(localStorage.key(i))
      return (
        <>
          <ImgSize src={products.img.src} />
          <p>name {products.name}</p>
          <p>pris {products.price} </p>
        </>
      )

      console.log(product)
    }
  }

  return (
    <div>
      <Cart>
        <h1>CartList</h1>
        {getAllCartItems}
      </Cart>
    </div>
  )
}

// <div key={index}>
// <ImgSize src={item[1].images[0].src.small} />

// <p>item {item[0]}</p>
// <p>name {item[1].name}</p>
// <p>pris {item[1].price} </p>
// </div>
