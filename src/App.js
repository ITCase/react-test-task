import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { BasketPage } from './components/Pages/BasketPage';
import { MainPage } from './components/Pages/MainPage';
import { ProductPage } from './components/Pages/ProductPage';
import Catalog from './pages/catalog/ui/Catalog/Catalog';
import Product from './pages/product/ui/Product';
import CartPage from './pages/cart/ui/CartPage/CartPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink className={'link'} to={'/cart'}>
          Корзина
        </NavLink>
        <NavLink className={'link'} to={'/'}>
          Главная страница
        </NavLink>
        <Routes>
          <Route path={'/'} element={<Catalog />} />
          <Route path={'/product/:id'} element={<Product />} />
          <Route path={'/cart'} element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
