import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css';
import MainLayout from "./layouts/MainLayout";
import ManageLayout from "./layouts/ManageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Manage/Dashboard";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import ProductUpdate from "./pages/ProductUpdate";
import Add from "./pages/Add";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<MainLayout />} > */}
      <Route index element={<Products />} />
      <Route path='products/:id' element={<Detail />} />
      <Route path='add' element={<Add />} />
      <Route path='edit/:id' element={<ProductUpdate />} />
      {/* </Route> */}
      // <Route path="/admin" element={<ManageLayout />} >
        {/* <Route index element={<Dashboard />} /> */}
      // </Route>
    </Routes >

  )
}

export default App
