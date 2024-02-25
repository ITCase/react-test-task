import {getProducts} from "../services/api";
import ProductItem from "../components/ProductItem";
import {useEffect, useState} from "react";

export default function MainPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProductsFromServer() {
      const productsList = await getProducts()
      setProducts(productsList)
    }

    getProductsFromServer()
  }, [])

  return <>
    <h1>Главная</h1>
    <div className='products-list'>{products.map((product) => <ProductItem product={product}/>)}</div>
  </>
}