import React, { useEffect, useState, useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import styled from "styled-components"

const TotalHeader = styled.h4`
  margin-top: 0px;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  text-align: center;
`

const DiscountText = styled.p`
  font-size: 16px;
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
    withDiscount = "*With discount"
  }

  return (
    <>
      <TotalHeader>
        Totalprice: {total} SEK
        <DiscountText>{withDiscount}</DiscountText>
      </TotalHeader>
    </>
  )
}

//Onchange för quantity > ökar sum
// Skall +-
