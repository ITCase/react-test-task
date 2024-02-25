import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import {CartContextProvider} from "./components/CartContextProvider";
import Layout from "./components/Layout";


export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/product/:id'} element={<ProductPage/>}/>
            <Route path={'/cart'} element={<CartPage/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  )
}
