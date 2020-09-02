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
  width: 90px;
`
const LogoImgFooter = styled.img`
  margin: 0;
  height: 150px;
  width: 150px;
`

const CartImg = styled.img`
  margin: 0;
  margin-left: auto;
  padding: 10px 20px 0px 10px;
  height: 60px;
  width: 60px;
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
  return (
    <>
      <OurHeader>
        <LogoImgHeader src={logo} />
        <CartImg src={cart} />
      </OurHeader>
      <OurMain>{children}</OurMain>
      <OurFooter>
        <LogoImgFooter src={logo} />

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
