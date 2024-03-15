import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../redux/actions/cartActions"

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const { cartItems } = cart

  return (
    <div>
      <Link
        style={{ marginBottom: "25px", display: "block" }}
        className="link"
        to="/"
      >
        Назад
      </Link>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="itemcart" key={index}>
              <div className="image">
                <img src={item.product.imgs[0]} alt="description"></img>
              </div>

              <h4>{item.product.name}</h4>
              <p>Цвет: {item.product.calculatedColor}</p>
              <p>Размер: {item.product.selectedSize}</p>
              <p>Цена: {item.product.price}</p>
              <button
                className="btn"
                onClick={() => dispatch(removeFromCart(index))}
              >
                Удалить
              </button>
            </div>
          ))
        ) : (
          <p>Корзина пуста</p>
        )}
      </div>
    </div>
  )
}

export default Cart
