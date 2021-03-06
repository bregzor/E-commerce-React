import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/BaseLayout";
import DetailedPage from "./pages/DetailedPage";
import StartPage from "./pages/StartPage";
import CheckOut from "./components/CheckOut";
import { ProductContext } from "./context/ProductContext";

export default function App() {
  let [products, setProducts] = useState([]);
  let [product, setProduct] = useState([]);
  let [toggle, setToggle] = useState("-370px");
  let [reviews, setReviews] = useState([]);
  let [lsRender, setlsRender] = useState(0);
  let [sum, setSum] = useState(0);
  let [cartCount, setCartCount] = useState(0);
  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          product,
          setProduct,
          toggle,
          setToggle,
          reviews,
          setReviews,
          lsRender,
          setlsRender,
          sum,
          setSum,
          cartCount,
          setCartCount,
        }}
      >
        <Switch>
          <Route path="/checkout">{<CheckOut />}</Route>
          <Route
            path="/product/:id"
            render={(props) => {
              return (
                <BaseLayout>
                  <DetailedPage {...props} />
                </BaseLayout>
              );
            }}
          ></Route>

          <Route path="/">
            <BaseLayout>
              <StartPage />
            </BaseLayout>
          </Route>
        </Switch>
      </ProductContext.Provider>
    </>
  );
}
