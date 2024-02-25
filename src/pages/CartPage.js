import {useAppContext} from "../components/CartContextProvider";
import ProductInCart from "../components/ProductInCart";

export default function CartPage() {
  const {productsInCart} = useAppContext()
  return <>
    <h1>Главная</h1>
    <div className='products-list'>{productsInCart.map((product) => <ProductInCart product={product}/>)}</div>
  </>
}