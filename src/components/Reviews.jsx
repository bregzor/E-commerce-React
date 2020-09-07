import React from 'react'
import styled from 'styled-components';

const UL = styled.ul`
display:flex;
flex-direction: column;
align-self:center;
width:100%;
// height: 50%;
border-bottom: 1px solid white;
list-style-type: none;
margin: 1% 0;
padding: 1% 0;

li {
  padding: 0 0;
}
` 
export default function Reviews({ name, date, description, title, rating }) {
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
