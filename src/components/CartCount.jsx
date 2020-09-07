import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import styled from "styled-components";

const CountButtonDisplay = styled.button`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: red;
  color: white;
  font-weight: bold;
  position: absolute;
  right: 70px;
  top: 15px;
  border: 1px solid white;
  &:hover {
  }
`;

export default function CartCount() {
  let { cartCount, setCartCount } = useContext(ProductContext);

  const renderCount = () => {
    if (cartCount <= 0) {
      cartCount = 0;
    }
    return cartCount;
  };

  useEffect(() => {
  localStorage.getItem("checkout") 
  ? setCartCount(parseInt(localStorage.length - 1))
  : setCartCount(parseInt(localStorage.length))
  
  }, []);

  return (
    <>
      <CountButtonDisplay>{renderCount()}</CountButtonDisplay>
    </>
  );
}
