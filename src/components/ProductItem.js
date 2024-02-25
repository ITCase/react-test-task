import {Link} from "react-router-dom";

export default function ProductItem({product}) {
  return <Link to={`/product/${product.id}`} className='product-item'>
    <img src={product.colors[0].images[0]} alt={'Товар'}/>
    <h2 className={'product-item-title'}>{product.name}</h2>
  </Link>
}