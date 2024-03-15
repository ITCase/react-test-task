import React from "react"

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <div className="image">
        <img src={product.colors[0].images[0]} alt="" />
      </div>
    </div>
  )
}

export default Product
