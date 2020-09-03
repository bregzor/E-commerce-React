import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext';
import ReviewCard from '../components/ReviewCard'
import styled from 'styled-components';


const Wrapper = styled.main`
height: 90vh;
width: 100vw;
display: flex;
justify-content: center;
flex-direction:column;
`

const Heading = styled.h1`
text-align:center;
margin: 3% 0;
`

export default function Reviews(props) {

	const id = props.match.params.id;

	const { reviews , setReviews } = useContext(ProductContext);

	const fetchReviews = () => {
		fetch(`https://mock-data-api.firebaseio.com/e-commerce/reviews/${id}.json`)
		.then(res => res.json())
		.then(data => {
			setReviews(data);
			console.log(data)
		});
	}

	useEffect(() => {
		fetchReviews();
	}, [])
	

	return (
		<Wrapper>
		<Heading>Reviews</Heading>
 		{Object.entries(reviews).map((item, index) => {
        const id = item[0];
        const reviews = item[1];
        return (
          <ReviewCard
            key={index}
            id={id}
            name={reviews.author.name}
						description={reviews.description}
						rating={reviews.rating}
						title={reviews.title}
						date= {reviews.date}
          />
        );
      })}
		</Wrapper>
	)
}
