import React, { useEffect, useState, useRef, useContext } from "react"
import { ProductContext } from "../context/ProductContext"

export default function CheckoutCoupons() {
  let [coupons, setCoupons] = useState({})
  let { sum, setSum } = useContext(ProductContext)
  let discountValue = useRef()
  //   let [sum, setSum] = useState(0)
  //   let sum = 0
  let totalSum = 0

  const fetchCoupons = () => {
    // console.log("value", discountValue)
    fetch(`https://mock-data-api.firebaseio.com/e-commerce/couponCodes.json`)
      .then(res => res.json())
      .then(data => {
        setCoupons(data)
        // console.log("data", data)
      })

    const calDiscount = () => {
      for (let i = 0; i < localStorage.length; i++) {
        const product = JSON.parse(localStorage.getItem(localStorage.key(i)))
        let count = product.addCount
        console.log("count", count)
        let productPrice = product.price
        console.log("productPrice", productPrice)
        let productXCount = productPrice * count
        console.log("productXCount", productXCount)
        if (product.name) {
          sum += parseInt(productXCount)
        }
        console.log("sum", sum)
      }
      console.log("sum", sum)
    }

    Object.entries(coupons).map((item, index) => {
      const code = item[0]
      const discount = item[1].discount

      if (discountValue.current.value.toUpperCase() == code) {
        console.log("yes you have discount")
        calDiscount()
        console.log("sum", sum)
        totalSum = Math.floor(sum * discount)
      }
      setSum(totalSum)
      console.log("totalSum", totalSum)
    })
  }

  return (
    <div>
      <label>Discount</label>
      <input
        ref={discountValue}
        type="text"
        placeholder="Enter your discount code"
      />

      <button onClick={() => fetchCoupons(discountValue.current.value)}>
        Add Discount
      </button>
      <p>Total med discount: {sum} </p>
    </div>
  )
}
