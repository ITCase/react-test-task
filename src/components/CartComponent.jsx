import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const CartComponent = () => {
  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart
  return (
    <div className="header__cart">
      <Link to="/cart">Корзина</Link>
      <div style={{ fontSize: "12px", color: "black" }}>
        Всего товаров: {cartItems.length}{" "}
      </div>
    </div>
  )
}

export default CartComponent
