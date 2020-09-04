import React, { useContext, useEffect } from "react"
import { ProductContext } from "../context/ProductContext"
import styled from "styled-components"
import AddToCartButton from "../components/AddToCartButton"
import CartList from "../components/CartList"
import { Link } from "react-router-dom"
import RatingStars from "../components/RatingStars"

const Main = styled.main`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
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
  margin: 1%;
  border-radius: 4pt;
`

const DivBox = styled.div`
  background: #9b9b9b;
  height: 100%;
  width: 100%;
  margin: 1%;
  border-radius: 4pt;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RatingAndAddBox = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  width: 80%;
  margin: 1%;
  justify-content: flex-end;

  p {
    margin-right: 15%;
  }
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  height: 20%;
  // background: blue;
  width: 80%;
`

const Description = styled.p`
  width: 80%;
  height: 40%;
  margin: 0 0 10px 0;
  // background: red;
  border-bottom: 1px solid white;
`

const ReadReviewQtyPriceBox = styled.div`
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  height: 10%;

  a {
    color: white;
    text-decoration: none;
    width: 100%;
    margin: 0 2% 0 2%;
  }
`

const QtyAndPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
  width: 80%;
  // background: orange;

  h3 {
    margin-left: 10%;
  }
`
const Paragraph = styled.p`
  margin: 0 2% 0 2%;
`

export default function DetailedPage(props) {
  const id = props.match.params.id

  const { product, setProduct } = useContext(ProductContext)

  const fetchProducts = () => {
    fetch(`https://mock-data-api.firebaseio.com/e-commerce/products/${id}.json`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  const img = product.images && product.images[0].src.small
  // console.log("bilden from detail", img)

  return (
    <>
      <Main>
        <Wrapper>
          <ImgBox>
            {product.images && (
              <img
                src={product.images[0].src.small}
                width="100%"
                height="100%"
                alt="..."
              />
            )}
          </ImgBox>

          <DivBox>
            <RatingAndAddBox>
              <Paragraph>Rating: {product.rating}</Paragraph>
              <AddToCartButton
                data={{
                  key: product.id,
                  id: product.id,
                  name: product.name,
                  img: img,
                  price: product.price,
                  addCount: 1,
                  quantity: product.stock
                }}
                id={product.id}
              />
            </RatingAndAddBox>
            <RatingStars rating={product.rating} />
            <Title>{product.name}</Title>
            <Description>Description: {product.description}</Description>

            <ReadReviewQtyPriceBox>
              <Link to={`/reviews/${id}`}>READ REVIEWS!</Link>

              <QtyAndPrice>
                <Paragraph>In Stock: {product.stock}</Paragraph>
                <h3> Price: {product.price} </h3>
              </QtyAndPrice>
            </ReadReviewQtyPriceBox>
          </DivBox>
        </Wrapper>
      </Main>
      <CartList />
    </>
  )
}
