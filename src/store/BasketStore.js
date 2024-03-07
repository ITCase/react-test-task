import { MobXProviderContext } from 'mobx-react';
import { makeAutoObservable } from 'mobx';
import { useContext } from 'react';
import { getLocalStorageItem, setLocalStorageValue } from './utils';

const LOCAL_STORAGE_BASKET_KEY = 'basket';

class BasketStore {
  basket;

  constructor() {
    this.basket = getLocalStorageItem(LOCAL_STORAGE_BASKET_KEY, []);
    makeAutoObservable(this);
  }

  sendProductToBasket = (product) => {
    alert('Товар добавлен');
    this.basket.push(product);
    setLocalStorageValue(LOCAL_STORAGE_BASKET_KEY, this.basket);
  };
  removeProductFromBasket = (productIndex) => {
    this.basket = this.basket.filter((elem, index) => index !== productIndex);
    setLocalStorageValue(LOCAL_STORAGE_BASKET_KEY, this.basket);
  };
}

const store = new BasketStore();
export const useStore = () => useContext(MobXProviderContext);
export default store;
