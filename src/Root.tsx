/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage/HomePage';
import { PhonePages } from './pages/PhonePages/PhonePages';
import { TabletPages } from './pages/TabletPages/TabletPages';
import { AccessoriesPages } from './pages/AccessoriesPages/AccessoriesPages';
import { Product } from './types/Products';
import { getProducts } from './api/fetchData';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { App } from './App';
import { FavoritePages } from './pages/FavoritePages/FavoritePages';
import { BasketPages } from './pages/BasketPages/BasketPages';

export const Root: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    try {
      const productsFromServer = await getProducts();

      setProducts(productsFromServer);
    } finally {
      console.log('download all Products');
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<HomePage products={products} />} />

          <Route path="phones">
            <Route index element={<PhonePages />} />
            <Route path=":productId" element={<ProductDetails />} />
          </Route>

          <Route path="tablets">
            <Route index element={<TabletPages />} />
          </Route>

          <Route path="accessory">
            <Route index element={<AccessoriesPages />} />
          </Route>

          <Route path="favorites">
            <Route index element={<FavoritePages product={[]} />} />
          </Route>

          <Route path="basket">
            <Route index element={<BasketPages />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  );
};
