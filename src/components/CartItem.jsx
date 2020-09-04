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
`;

const CartName = styled.p`
  font-size: 13px;
`;
const CartPrice = styled.p`
  font-size: 13px;
  white-space: nowrap;
`;
const CartImg = styled.img`
  width: 60px;
`;

const Stepper = styled.input`
  width: 30px;
  height: 20px;
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
        <CartName>{name}</CartName>
        <CartPrice>{price} SEK</CartPrice>
        <AddReduce>
          <IoIosAddCircleOutline onClick={add} />
        </AddReduce>
        <Stepper type="number" value={count} />
        <AddReduce>
          <IoIosRemoveCircleOutline onClick={remove} />
        </AddReduce>
          <IoMdTrash onClick={deleteItem} />
      </CartItemContainer>
    </>
  );
}
