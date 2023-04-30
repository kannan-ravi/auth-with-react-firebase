import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import ProtectedRoutes from "./ProtectedRoutes";

import React from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./context/UserContext";

function App() {
  

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
