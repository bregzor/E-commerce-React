import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import styled from "styled-components";

const CountButtonDisplay = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: red;
  color: white;
  font-weight: bold;
  border: 1px solid white;
  &:hover {
  }
`;

export default function CartCount() {
  const { cartCount } = useContext(ProductContext);
  return (
    <>
      <CountButtonDisplay>{cartCount}</CountButtonDisplay>
    </>
  );
}
