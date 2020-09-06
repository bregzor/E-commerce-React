import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from '../context/ProductContext';
import styled from "styled-components";

const TotalHeader = styled.h4`
  margin-top: 0px;
  font-weight: bold;
  align-self: flex-end;
  font-size:24px;
  width:100%;
  text-align:right;
  padding-top:25px;
  border-bottom:1px solid black;
`;

export default function TotalSum() {
  let [total, setTotal] = useState(0);
  let {lsRender} = useContext(ProductContext);

  const calculateTotal = () => {
    let sum = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if(!localStorage.getItem("checkout")) {
        sum += parseInt(product.price);
      }      
    }
    setTotal(sum);
  };

  useEffect(() => {
    calculateTotal();
  }, [lsRender]);

  return (
    <>
      <TotalHeader> TOTAL {total} SEK</TotalHeader>
    </>
  );
}


//Onchange för quantity > ökar sum
// Skall +-