import React, { useState, useEffect, useContext }  from "react";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';


export default function StartPage() {


	const {products ,setProducts} = useContext(ProductContext);

	const fetchProducts = () => {
		fetch("https://mock-data-api.firebaseio.com/e-commerce.json")
		.then(res => res.json())
		.then(data => {
			setProducts(data["products"]);
			console.log(data["products"]);
		});
	}

	useEffect(() => {
		fetchProducts();
	}, [])

  return <>
	<Hero/>
	<ProductList/>
	<Link to="/product/16065">Till produkten!</Link>
  </>;
}