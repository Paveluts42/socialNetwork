import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profil from "./components/Profil";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profil />

    </div>
  );
}

export default App;
