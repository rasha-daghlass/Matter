import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import NotFound from "./views/NotFound";
import ProductList from "./views/ProductList";
import ProductPage from "./views/ProductPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/ProductPage" element={<ProductPage/>} />
          <Route path="ProductList" element={<ProductList/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
