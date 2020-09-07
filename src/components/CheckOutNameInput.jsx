import React, { useRef } from "react"
import styled from "styled-components"

const NameInputField = styled.input`
margin-top: 10px;
margin-bottom: 25px;
height: 25px;
width: 190px;
padding-left: 5px;
border-radius: 5px;
border: 1px solid #1a1b1d;

`

export default function PlaceOrderButton() {
  const nameInputField = useRef()

  return (
    <>
      <NameInputField ref={nameInputField} type="text"></NameInputField>
    </>
  )
}
