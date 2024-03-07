import React, {useMemo} from 'react';
import { useLocalStorage } from '../../../../shared/hooks/useLocalStorage';
import CartList from '../../../../widgets/cart/ui/CartList/CartList';

const CartPage = () => {
  const [cart, setCart] = useLocalStorage('cart', []);
  const sum = useMemo(() => cart.reduce((acc,cur) => acc + (+cur.price), 0))
  if (!cart) return <h1>Корзина пуста...</h1>;

  return (
    <>
      <CartList cart={cart} setCart={setCart} />
      {cart.length && <p>Общая сумма заказа: {sum}$</p>}
    </>
  );
};

export default CartPage;
