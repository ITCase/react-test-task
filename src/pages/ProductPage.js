import {useEffect, useState} from "react";
import {getProduct, getSizes} from "../services/api";
import {useParams} from "react-router";
import ColorButton from "../components/ColorButton";
import SizeButton from "../components/SizeButton";
import {useAppContext} from "../components/CartContextProvider";
import {getActiveSizes, isProductInCart} from "../utils";

export default function ProductPage() {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  const [sizes, setSizes] = useState([])
  const [activeColor, setActiveColor] = useState(null)
  const [activeSize, setActiveSize] = useState(null)
  const [image, setImage] = useState(0)
  const {productsInCart, addProduct} = useAppContext()

  const handleNextImageClick = () => {
    setImage(image => image === activeColor.images.length - 1 ? 0 : image + 1)
  }

  const handlePreviousImageClick = () => {
    setImage(image => image === 0 ? activeColor.images.length - 1 : image - 1)
  }

  const handleAddToCart = () => {
    addProduct({id: product.id, name: product.name, color: activeColor, size: activeSize})
  }

  useEffect(() => {
    async function getSizesFromServer() {
      const sizesFromServer = await getSizes()
      setSizes(sizesFromServer)
      setActiveSize(sizesFromServer[0])
    }

    getSizesFromServer()
  }, []);

  useEffect(() => {
    async function getProductFromServer() {
      const productFromServer = await getProduct(id)
      setProduct(productFromServer)
      setActiveColor(productFromServer.colors[0])
    }

    getProductFromServer()
  }, [id]);

  if (!product || !activeColor || !activeSize) {
    return null
  }

  return <div className={'product-card'}>
    <div className={'image-container'}>
      <img src={activeColor.images[image]} alt={'Товар'} className={'image'}/>
      <div className={'image-controls'}>
        <button type='button' className={'controls-button'} onClick={handlePreviousImageClick}>{'<'}</button>
        <button type='button' className={'controls-button'} onClick={handleNextImageClick}>{'>'}</button>
      </div>
    </div>
    <div className={'product-info'}>
      <h2>{product.name}</h2>
      <p className={'product-description'}>{activeColor.description}</p>
      <p className={'price'}>Цена: <span>{activeColor.price}</span></p>
      <div className={'buttons-container'}>
        {product.colors.map(color => <ColorButton color={color} isActive={activeColor.id === color.id}
                                                  onClick={() => setActiveColor(color)} key={color.id}/>)}
      </div>
      <div className={'buttons-container'}>
        {getActiveSizes(sizes, activeColor.sizes)
          .map(size => <SizeButton size={size} onClick={() => setActiveSize(size)}
                                   isActive={size.id === activeSize.id} key={size.id}/>)}
      </div>

      <button type={"button"} onClick={handleAddToCart}
              disabled={activeColor.sizes.length === 0 || isProductInCart(productsInCart, product, activeColor, activeSize)}>В
        корзину
      </button>

    </div>
  </div>
}