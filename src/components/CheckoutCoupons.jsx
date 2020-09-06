import React, { useEffect, useState, useRef, useContext } from "react"
import { ProductContext } from "../context/ProductContext"

export default function CheckoutCoupons() {
  let [coupons, setCoupons] = useState({})
  let { sum, setSum } = useContext(ProductContext)
  let discountValue = useRef()

  let totalSum = 0

  const fetchCoupons = () => {
    fetch(`https://mock-data-api.firebaseio.com/e-commerce/couponCodes.json`)
      .then(res => res.json())
      .then(data => {
        setCoupons(data)
      })
  }

  useEffect(() => {
    fetchCoupons()
  }, [])

  const calDiscount = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)))
      const count = product.addCount
      const productPrice = product.price
      let productXCount = productPrice * count

      if (product.name) {
        sum += parseInt(productXCount)
      }
    }

    Object.entries(coupons).map((item, index) => {
      const code = item[0]
      const discount = item[1].discount

      if (discountValue.current.value.toUpperCase() == code) {
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

      <button onClick={() => calDiscount(discountValue.current.value)}>
        Add Discount
      </button>
      <p>Total med discount: {sum} </p>
    </div>
  )
}
