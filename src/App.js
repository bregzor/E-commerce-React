import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/BaseLayout";
import Hero from "./components/Hero";
import DetailedPage from "./pages/DetailedPage";
import StartPage from "./pages/StartPage";
import CheckOut from "./components/CheckOut";
import { ProductContext } from "./context/ProductContext";

function App() {

  let [products, setProducts] = useState([]);
  let [product, setProduct] = useState([]);
  let [toggle, setToggle] = useState("-370px");

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts, product, setProduct, toggle, setToggle }}>
        <Switch>
          <Route path="/cart">{/* <CartPage /> */}</Route>
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

export default App;
