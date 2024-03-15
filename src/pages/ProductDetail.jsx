import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/actions/cartActions"

const ProductDetail = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const product = location.state.product
  const sizes = location.state.sizes

  const [selectedColor, setSelectedColor] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleColorSelect = (colorId) => {
    setSelectedColor(colorId)
    setSelectedImageIndex(0)

    const selectedColorObject = product.colors.find(
      (color) => color.id === colorId
    )
    if (selectedColorObject) {
      setSelectedSize(null)
    }
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }

  return (
    <div className="product-detail">
      <Link className="main" to="/">
        Назад
      </Link>
      <h2>{product.name}</h2>
      <div className="colors">
        <select
          name=""
          id=""
          value={selectedColor}
          onChange={(e) => handleColorSelect(parseInt(e.target.value))}
        >
          {product.colors.map((color) => (
            <option
              key={color.id}
              value={color.id}
              style={{ backgroundColor: color.name }}
            >
              {color.name}
            </option>
          ))}
        </select>
      </div>
      <div className="sizes">
        {sizes.map((size) => (
          <button
            key={size.id}
            className={`size ${selectedSize === size.label ? "selected" : ""}`}
            onClick={() => handleSizeSelect(size.label)}
            disabled={
              !product.colors[selectedColor - 1]?.sizes.includes(size.id)
            }
          >
            {size.label}
          </button>
        ))}
      </div>

      <div className="images">
        {product.colors[selectedColor - 1]?.images.length > 0 && (
          <>
            <button
              className="slider prev-button"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex > 0
                    ? prevIndex - 1
                    : product.colors[selectedColor - 1].images.length - 1
                )
              }
            >
              &lt;
            </button>
            <img
              className="imageprod"
              src={product.colors[selectedColor - 1].images[selectedImageIndex]}
              alt={product.description}
            />

            <button
              className="slider next-button"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex <
                  product.colors[selectedColor - 1].images.length - 1
                    ? prevIndex + 1
                    : 0
                )
              }
            >
              &gt;
            </button>
          </>
        )}
      </div>

      <div className="info">
        <p>{selectedColor && product.colors[selectedColor - 1]?.description}</p>
        <p>{selectedSize && `Выбран размер: ${selectedSize}`}</p>
        <p>
          {selectedColor &&
            `Выбран цвет: ${product.colors[selectedColor - 1]?.name}`}
        </p>

        <p>
          {selectedColor && `Цена: ${product.colors[selectedColor - 1]?.price}`}
        </p>
        {selectedColor && selectedSize && (
          <button
            className="btn"
            onClick={() =>
              dispatch(
                addToCart(
                  product,
                  product.colors[selectedColor - 1]?.name,
                  selectedSize,
                  product.colors[selectedColor - 1]?.price
                )
              )
            }
          >
            В корзину
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
