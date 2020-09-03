import React from 'react'
import styled from 'styled-components';

const UL = styled.ul`
display:flex;
flex-direction: column;
align-self:center;
width:60vw;
border: 1px solid grey;
list-style-type: none;
margin: 1% 0;
padding: 2%;

li {
  padding: 1% 0;
}
` 


export default function ReviewCard({ name, date, description, title, rating }) {
  return (
    <>
      <UL>
        <li>{date}</li>
        <li>Name: {name}</li>
        <li>Title: {title}</li>
        <li>Review: {description}</li>
        <li>Rating: {rating}</li>
      </UL>
    </>
  )
}
