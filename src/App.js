import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/home/login/Login";
import Profile from "./pages/home/profile/Profile";

const App = () => {
  return (
    <div>
      <Login />
      <Home />
      <Profile />
    </div>
  );
};

export default App;
