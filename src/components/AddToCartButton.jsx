import React, { useContext } from "react"
import styled from "styled-components"
import { ProductContext } from "../context/ProductContext"

const Cartbutton = styled.button`
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  border-radius: 50%;
  background: white;
  position: absolute;
  align-self: flex-end;
  font-size: 32px;
  cursor: pointer;
  z-index: 1;
  position: ;
  background:white;
  transition:all 250ms ease-in;

  &:hover {
    transition:all 250ms ease-in;
    background:lightgray;
  }
`

export default function AddToCartButton({ id, data }) {
  const { lsRender, setlsRender, setCartCount, cartCount } = useContext(ProductContext)

  const addItemToLocalStorage = () => {
    localStorage.setItem(`product_${id}`, JSON.stringify(data))
    setlsRender(lsRender + 1)
    setCartCount(cartCount +1)
  }
  return <Cartbutton onClick={addItemToLocalStorage}>+</Cartbutton>
}
