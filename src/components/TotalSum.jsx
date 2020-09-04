import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TotalHeader = styled.h4`
  font-weight: bold;
  align-self: flex-end;
  font-size:24px;
  width:100%;
  text-align:right;
  border-top:1px solid black;
  padding-top:25px;
  border-bottom:1px solid black;
`;

export default function TotalSum() {
  let [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let sum = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)));
      sum += parseInt(product.price);
    }
    setTotal(sum);
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  return (
    <>
      <TotalHeader>{total}</TotalHeader>
    </>
  );
}
