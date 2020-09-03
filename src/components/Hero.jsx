import React from "react"
import { useContext } from "react"
import styled from "styled-components"
import { ProductContext } from "../context/ProductContext.js"

const HeroImg = styled.img`
  min-width: 100%;
  max-height: 270px;
  object-fit: cover;
`

export default function Hero() {
  const { products, setProducts } = useContext(ProductContext)

  const productsArray = Object.entries(products)

  const randomProduct =
    productsArray[Math.floor(Math.random() * productsArray.length)]

  return (
    <div>
      {randomProduct && <HeroImg src={randomProduct[1].images[0].src.large} />}
    </div>
  )
}
