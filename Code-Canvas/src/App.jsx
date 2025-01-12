import React, { useState } from "react";
import LandingPage from "./components/LandingPage/landingPage";
import Dashboard from "./components/profile/profile";
import Navbar from "./components/LandingPage/circle1/navbar";
import "./App.css";

import Login from "./components/loginsignup/login";
import Signup from "./components/loginsignup/signup";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./components/profile/profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage />
        }
      />
      <Route path="/profile" element={
          <>
            {isLoggedIn ? (
                <>
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "90px",
                      "margin-top": "-10px",
                    }}
                  >
                    <Navbar />
                  </div>
                  <Dashboard />
                </>
              ) : (
                <>
                  <LandingPage setIsLoggedIn={setIsLoggedIn} />
                </>
              )}
          </>
        } 
      />
    </Routes>
  );
}

export default App;
