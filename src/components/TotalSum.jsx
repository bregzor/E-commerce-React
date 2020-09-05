import React, { useEffect, useState, useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import styled from "styled-components"

const TotalHeader = styled.h4`
  font-weight: bold;
  align-self: flex-end;
  font-size: 24px;
  width: 100%;
  text-align: right;
  padding-top: 25px;
  border-bottom: 1px solid black;
`

export default function TotalSum() {
  let [total, setTotal] = useState(0)
  let { lsRender, sum, setSum } = useContext(ProductContext)

  const calculateTotal = () => {
    let sum = 0
    for (let i = 0; i < localStorage.length; i++) {
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)))
      console.log("prisantal", product.addCount)
      let count = product.addCount
      let productPrice = product.price
      let productXCount = productPrice * count
      //   if (!localStorage.getItem("checkout")) {
      if (product.name) {
        sum += parseInt(productXCount)
      }
    }
    setTotal(sum)
  }

  useEffect(() => {
    calculateTotal()
  }, [lsRender])

  let withDiscount = ""

  if (sum) {
    total = sum
    withDiscount = " (with discount)"
  }

  return (
    <>
      {" "}
      <TotalHeader>
        {" "}
        Totalprice{withDiscount}: {total} SEK
      </TotalHeader>{" "}
    </>
  )
}

//Onchange för quantity > ökar sum
// Skall +-
