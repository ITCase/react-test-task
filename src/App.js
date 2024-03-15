import React from "react"
import ProductDetail from "./pages/ProductDetail"
import ProductList from "./pages/ProductList"
import Cart from "./pages/Cart"
import { Routes, Route } from "react-router-dom"
import CartComponent from "./components/CartComponent"
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartComponent />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </header>
    </div>
  )
}
