
import {  lazy, Link } from 'react';

import { Routes, Route } from "react-router-dom";


const Home = lazy(() => import("../pages/Home"));
const Character = lazy(() => import("../pages/Character"));
const SharedLayout = lazy(() => import("../components/SharedLayout/SharedLayout"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));


export const App = () => {


  


  





  return (
    <>
        

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
 
   
     

    </>
  );
};
