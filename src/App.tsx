import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'antd/dist/antd.css';
import MainLayout from "./layouts/MainLayout";
import ManageLayout from "./layouts/ManageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Manage/Dashboard";
import Signup from "./pages/Signup";

const config = {
  // apiKey: 'AIzaSyBs1_rlmYJ19O9ZiiUyvnZ27pfmVC-uw9k',
  // authDomain: 'react-sso-24f46.firebaseapp.com',
  apiKey: process.env.REACT_APP_FISEBASE_API_KEY,
  authDomain: process.env.REACT_APP_FISEBASE_AUTH_DOMAIN,
  // ...
};  
firebase.initializeApp(config);

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      console.log('user', user);
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      <Route path="/admin" element={<ManageLayout />} >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>

  )
}

export default App
