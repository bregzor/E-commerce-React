import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
  IoMdTrash,
} from "react-icons/io";

const CartItemContainer = styled.div`
  background: white;
  width: 100%;
  border-bottom: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items:flex-end;
`;

const CartName = styled.p`
  font-size: 13px;
  font-weight: bold;
  text-transform:uppercase;
`;
const CartPrice = styled.p`
  font-size: 13px;
  white-space: nowrap;
`;
const CartImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const CartInnerWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;


const StepperContainer = styled.div`
  display: flex;
  align-items:center;
`;


const Stepper = styled.input`
  width: 30px;
  height: 15px;
`;

const CartButtonContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  background: black;
`;

const AddReduce = styled.p`
  padding: 5px;
`;

export default function CartItem({ name, price, img, quantity, id, render }) {
  let [count, setCount] = useState(1);

  function add() {
    let qt = parseInt(quantity);
    count < qt ? setCount(count + 1) : console.log(parseInt(quantity));
  }

  function remove() {
    setCount(count - 1);
    if (count <= 0) {
      deleteItem();
    }
  }

  function deleteItem() {
    localStorage.removeItem(`product_${id}`);
    render();
  }

  return (
    <>
      <CartItemContainer>
        <CartImg src={img} />
        <CartInnerWrapp>
          <CartName>{name}</CartName>
          <CartPrice>{price} SEK</CartPrice>
        </CartInnerWrapp>
        <StepperContainer>
        <AddReduce>
          <IoIosAddCircleOutline onClick={add} />
        </AddReduce>
        <Stepper type="number" value={count} />
        <AddReduce>
          <IoIosRemoveCircleOutline onClick={remove} />
        </AddReduce>
        <IoMdTrash onClick={deleteItem} />
        </StepperContainer>
      </CartItemContainer>
    </>
  );
}
