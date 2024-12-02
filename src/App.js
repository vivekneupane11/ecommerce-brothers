import React from "react";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Account from "./pages/Account";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
