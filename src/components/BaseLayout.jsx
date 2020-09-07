import React, { useContext } from "react"
import styled from "styled-components"
import logo from "../images/grupp3_logo2.svg"
import cart from "../images/cart_image.svg"
import webshopLogo from "../images/webshop.svg"

import { Link } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import CheckOut from "./CheckOut"
import CartCount from "./CartCount";

const OurHeader = styled.header`
  width: 100%;
  display: flex;
  background: #1a1b1d;
  height: 60px;
  color: white;
  position:fixed;
  z-index:1000;
  justify-content: space-between;
  opacity:0.9;
`;


const WebshopLogo = styled.img`
  width: 70px;

  @media (min-width: 600px) {
    width: 120px;
  }
`
const OurMain = styled.main`
  background: lightgray;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex;
`
const OurFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #1a1b1d;
  height: 300px;
  width: 100%;
`

const LogoImgHeader = styled.img`
  margin: 0;
  padding-left: 20px;
  height: 80px;
  width: 70px;
  position:relative;
  top:-10px;
`
const LogoImgFooter = styled.img`
  margin: 0;
  height: 150px;
  width: 150px;
`

const CartImgWrap = styled.div`
 display:flex;
 flex-direction:row;
 justify-content:flex-end;
 width:100%;
`

const CartImg = styled.img`
  margin: 0;
  padding: 10px 20px 0px 10px;
  height: 40px;
  width: 40px;
  cursor: pointer;
`

const NamesList = styled.ul`
  font-size: 16px;
  list-style: none;
  text-align: center;
  color: white;
`

const NamesListItem = styled.li`
  padding: 2px;
`

export default function BaseLayout({ children }) {

  const { toggle, setToggle, cartCount } = useContext(ProductContext);

  const toggleMenu = () => {
    toggle === "-370px" ? setToggle("0px") : setToggle("-370px")
  }

  return (
    <>
      <OurHeader>
        <Link to="/">
          <LogoImgHeader src={logo} />
        </Link>
        <CartImgWrap>
        <CartCount count={cartCount}/>
        <WebshopLogo src={webshopLogo} />
        <CartImg src={cart} onClick={toggleMenu} />
        </CartImgWrap>
      </OurHeader>
      <OurMain>{children}</OurMain>
      <OurFooter>
        <Link to="/">
          <LogoImgFooter src={logo} />
        </Link>
        <NamesList>
          <NamesListItem>Vanessa Suthat</NamesListItem>
          <NamesListItem>Ludvig Dahlstedt</NamesListItem>
          <NamesListItem>Sofia Khan</NamesListItem>
          <NamesListItem>Christopher Berge</NamesListItem>
          <NamesListItem>Martin Axelsson</NamesListItem>
        </NamesList>
      </OurFooter>
    </>
  )
}
