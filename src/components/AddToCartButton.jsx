import React from "react";
import styled from 'styled-components';

const Cartbutton = styled.button `
	width:35px;
	height:35px;
	outline:none;
	border:none;
	border-radius:50%;
	background:white;
	position:absolute;
	align-self:flex-end;
	font-size:32px;
	cursor:pointer;
	z-index:1;
	position:
`

export default function AddToCartButton({ id, data, size, position}) {

	const addItemToLocalStorage = () => {
    localStorage.setItem(
      `product_${id}`,
      JSON.stringify(data)
	  );
	};
	
  return (
	<Cartbutton onClick={addItemToLocalStorage}>+</Cartbutton>
  )
}
