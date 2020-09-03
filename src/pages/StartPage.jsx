import React, { useState, useEffect, useContext } from "react"
import ProductList from "../components/ProductList"
import Hero from "../components/Hero"
import { ProductContext } from "../context/ProductContext"
import { Link } from "react-router-dom"
import CartList from "../components/CartList"

export default function StartPage() {

	const {setProducts} = useContext(ProductContext);

	const fetchProducts = () => {
		fetch("https://mock-data-api.firebaseio.com/e-commerce.json")
		.then(res => res.json())
		.then(data => {
			setProducts(data["products"]);
		});
	}

	useEffect(() => {
		fetchProducts();
	}, [])

  return (
    <>
      <Hero />
      <ProductList />
      <CartList />
    </>
  )
}
