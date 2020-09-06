import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import styled from "styled-components";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
  IoMdTrash,
} from "react-icons/io";

const CartItemContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid orange;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  align-items: flex-end;
`;

// const CartName = styled.p`
//   font-size: 13px;

//   padding: 20px;
//   align-items:flex-end;
// `;

const CartName = styled.p`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
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
  align-items: center;
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

export default function CartItem({
  name,
  price,
  img,
  quantity,
  id,
  render,
  addCount,
}) {
  const { cartCount, setCartCount } = useContext(ProductContext);

  function addMore() {
    let info = JSON.parse(localStorage.getItem(`product_${id}`));

    let updatedLocalStorage = {
      ...info,
      addCount: addCount + 1,
    };

    let qty = parseInt(quantity);

    addCount < qty
      ? localStorage.setItem(
          `product_${id}`,
          JSON.stringify(updatedLocalStorage)
        )
      : console.log(parseInt(quantity));

    !cartCount > 1 ? setCartCount(cartCount - 1) : console.log("count");

    render();
  }

  function reduce() {
    let info = JSON.parse(localStorage.getItem(`product_${id}`));

    let updatedLocalStorage = {
      ...info,
      addCount: addCount - 1,
    };

    addCount > 0
      ? localStorage.setItem(
          `product_${id}`,
          JSON.stringify(updatedLocalStorage)
        )
      : console.log(parseInt(quantity));

    if (addCount <= 0) {
      deleteItem();
    }
    setCartCount(cartCount - 1);
    render();
  }

  function deleteItem() {
    localStorage.removeItem(`product_${id}`);
    setCartCount(cartCount - 1);
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
            <IoIosAddCircleOutline onClick={addMore} />
          </AddReduce>
          <Stepper type="number" value={addCount} />
          <AddReduce>
            <IoIosRemoveCircleOutline onClick={reduce} />
          </AddReduce>
          <IoMdTrash onClick={deleteItem} />
        </StepperContainer>
      </CartItemContainer>
    </>
  );
}
