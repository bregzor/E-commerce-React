import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom'

export default function ProductList() {
	const {products} = useContext(ProductContext);
	
	return (
		<div>
	{
		Object.entries(products).map((item, index) => {
			return <Link to={`/product/${item[0]}`}><p id={item[0]} key={ index }>{item[1].name}</p></Link>
		})
	}
			<p>Lista!</p>
		</div>
	)
}
