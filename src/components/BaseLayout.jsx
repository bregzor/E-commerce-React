import React from "react"
import styled from "styled-components"
import logo from "../images/grupp3_logo2.svg"
import cart from "../images/cart_image.svg"

const OurHeader = styled.header`
  width: 100%;
  display: flex;
  background: #1a1b1d;
  height: 80px;
  color: white;
`

const OurMain = styled.main`
  background: lightgray;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex;
`
const OurFooter = styled.footer`
  background: black;
  height: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
`

const LogoImg = styled.img`
  margin: 0;
  padding-left: 20px;
  height: 80px;
  width: 90px;
`

const CartImg = styled.img`
  margin: 0;
  margin-left: auto;
  padding: 10px 20px 0px 10px;
  height: 60px;
  width: 60px;
`

export default function BaseLayout({ children }) {
  return (
    <>
      <OurHeader>
        <LogoImg src={logo} />
        <CartImg src={cart} />
      </OurHeader>
      <OurMain>{children}</OurMain>
      <OurFooter>
        <h4>Created by Group 3</h4>
      </OurFooter>
    </>
  )
}
