import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './Components/Loader/Loader';

//  I Implemented Lazy imports here I used these approach in every big projects

const Home = lazy(() => import('./Pages/Home/Home'));
const Product = lazy(() => import('./Pages/Product/Product'));

const App = () => {
  return (
    // I add the component here insted of loading 
    <Suspense fallback={<div className='w-full h-screen flex justify-center items-center bg-green-700'><Loader/></div>}> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Suspense>
  );
}

export default App;
