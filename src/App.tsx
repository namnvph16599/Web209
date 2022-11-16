import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import 'antd/dist/antd.css';
import MainLayout from "./layouts/MainLayout";
import ManageLayout from "./layouts/ManageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Manage/Dashboard";
import Signup from "./pages/Signup";
import Couter from "./pages/Couter";
function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<MainLayout />} >
    //     <Route index element={<Home />} />
    //     <Route path='login' element={<Login />} />
    //     <Route path='signup' element={<Signup />} />
    //   </Route>
    //   <Route path="/admin" element={<ManageLayout />} >
    //     <Route index element={<Dashboard />} />
    //   </Route>
    // </Routes>
    // <Couter />
    <div className="text-center">
      <h1 className="font-bold text-2xl text-blue-900">
        React and Tailwind with Vitejs!
      </h1>
    </div>


  )
}

export default App
