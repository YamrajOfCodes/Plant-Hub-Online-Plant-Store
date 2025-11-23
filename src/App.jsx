import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";

//  I Implemented Lazy imports here I used these approach in every big projects

const Home = lazy(() => import('./Pages/Home/Home'));
const Product = lazy(() => import('./Pages/Product/Product'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Suspense>
  );
}

export default App;
