import React from 'react'
import styled from 'styled-components';


const OurHeader = styled.header`
	width:100%;
	display:flex;
	background:black;
	height:60px;
`

const OurMain = styled.main`
	background:lightgray;
	height:100vh;
	display:flex;
	flex-direction:column;
	justify-content: flex;
`
const OurFooter = styled.footer`
background:black;
height:15px;
position:fixed;
bottom:0;
width:100%;
`
export default function BaseLayout({children}) {
	return (
		<>
		<OurHeader>
			<h1>Our app</h1>
		</OurHeader>
		<OurMain>
			{children}
		</OurMain>
	<OurFooter><h4>Created by Group 3</h4></OurFooter>
		</>
	)
}
