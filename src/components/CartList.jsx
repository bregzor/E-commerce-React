import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../context/ProductContext.js";
import CartItem from './CartItem';

const Cart = styled.section`
  background: green;
  width: 320px;
  position: absolute;
  border-radius: 3px;
  padding: 20px;
  right: ${props => props.position || "0px"};
  top: 60px;
  z-index:20;
`;
const ImgSize = styled.img`
  width: 150px;
  heigth: auto;
  object-fit: cover;
`;

export default function CartList() {
  const [cartItems, setCartItems] = useState([]);
  const {toggle} = useContext(ProductContext);

  const getAllCartItems = () => {
    const AllProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      //check if product later
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)));
      AllProducts.push(product);
    }
    setCartItems(AllProducts);
  };

  const renderItem = (product) => {
    return (
      <div>
        <ImgSize src={product.img} />
        <p>name {product.name}</p>
        <p>pris {product.price} </p>
      </div>
    );
  };

  useEffect(() => {
    getAllCartItems();
  }, []);

  return (
    <div>
      <Cart position={toggle}>
        <h1>CartList</h1>
        {cartItems.map((product, index) => {
          return (
            <CartItem
              key = { index }
              name={product.name}
              price={product.price}
              img={product.img}
            />
          );
        })}
      </Cart>
    </div>
  );
}
