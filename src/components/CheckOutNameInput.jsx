import React, { useRef } from "react"
import styled from "styled-components"

const NameInputField = styled.input``

export default function PlaceOrderButton() {
  const nameInputField = useRef()

  return (
    <>
      <NameInputField ref={nameInputField} type="text"></NameInputField>
    </>
  )
}
