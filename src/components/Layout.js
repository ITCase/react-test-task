import {Link} from "react-router-dom";
import {useAppContext} from "./CartContextProvider";

export default function Layout({children}) {
  const {productsInCart} = useAppContext()
  return <>
    <header>
      <nav>
        <Link to={'/'} className={'nav-link'}>Главная</Link>
        <Link to={'/cart'} className={'nav-link'}>Корзина ({productsInCart.length})</Link>
      </nav>
    </header>
    <main>{children}</main>
  </>
}