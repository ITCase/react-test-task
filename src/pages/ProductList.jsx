import { useEffect, useState } from "react"
import React from "react"
import { Link } from "react-router-dom"
import Product from "./Product"

import { getProducts } from "../services/api"
import { getSizes } from "../services/api"
const ProductList = () => {
  let [prods, setProds] = useState([])
  let [sizes, setSizes] = useState([])

  useEffect(() => {
    async function getProds() {
      let asyncProds = await getProducts()
      setProds(asyncProds)
    }
    getProds()

    async function getS() {
      let asyncGetSizes = await getSizes()
      setSizes(asyncGetSizes)
    }
    getS()
  }, [])

  return (
    <div className="prodlist">
      {prods?.map((product, i) => (
        <Link key={i} state={{ product, sizes }} to={`/product/${product.id}`}>
          <Product product={product}></Product>
        </Link>
      ))}
    </div>
  )
}

export default ProductList
