import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext';
import styled from 'styled-components';
import AddToCartButton from '../components/AddToCartButton'

const Wrapper = styled.div`
display:flex;
justify-content: center;
justify-self: center;
align-items: center;
align-self: center;
width: 80vw;
height: 50vh;
background: lightgray;
color: white;
`

const ImgBox = styled.div`
height: 100%;
width: 60%;
margin:1%;
border-radius:4pt;
`

const DivBox = styled.div`
background: #9B9B9B;
height: 100%;
width: 100%;
margin: 1%;
border-radius:4pt;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const RatingAndAddBox = styled.div`
display: flex;
align-items: center;
// background: green;
height:10%;
width: 80%;
margin: 1%;
justify-content: flex-end;
`

const Title = styled.h2` 
display:flex;
align-items: center;
margin: 0 0 10px 0;
height: 20%;
// background: blue;
width: 80%;
`

const Description = styled.p `
width: 80%;
height: 40%;
margin: 0 0 10px 0;
// background: red;
border-bottom: 1px solid white;
`

const QtyAndPrice = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
height: 10%;
width: 80%;
// background: orange;
`
const Paragraph = styled.p`
margin:  0 2% 0 2%;
`


export default function DetailedPage(props) {

	const id = props.match.params.id;

	const { product , setProduct } = useContext(ProductContext);

	const fetchProducts = () => {
		fetch(`https://mock-data-api.firebaseio.com/e-commerce/products/${id}.json`)
		.then(res => res.json())
		.then(data => {
			setProduct(data);
		});
	}

	useEffect(() => {
		fetchProducts();
	}, [])

	let imgUrl = "";

	return (
		<>
		<Wrapper>
			<ImgBox>
				{product.images && 	<img src={product.images[0].src.small} 
				width="100%" 
				height="100%"
				alt="..." />
			
				}
			</ImgBox>

			<DivBox>
				<RatingAndAddBox>
					<Paragraph>Rating: {product.rating}</Paragraph>
					<AddToCartButton data={{name: product.name , img: product.images, price: product.price}}/>
				</RatingAndAddBox>

				<Title>{product.name}</Title>
				<Description>Description: {product.description}</Description>
				<QtyAndPrice>
					<Paragraph>In Stock: {product.stock}</Paragraph>
					<Paragraph> Price: {product.price} </Paragraph>
				</QtyAndPrice>
			</DivBox>
		</Wrapper>
		</>
	)
}
