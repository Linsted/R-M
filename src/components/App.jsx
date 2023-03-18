
import {  lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";


const Home = lazy(() => import("../pages/Home"));
const Character = lazy(() => import("../pages/Character"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {

  return (
    <>
        
      <Suspense>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="*" element={<PageNotFound />} />
       
        </Routes>
      </Suspense>
   
     

    </>
  );
};
