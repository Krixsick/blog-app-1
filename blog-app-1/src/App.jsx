import { useState } from "react";
import Home from "./Components/Home.jsx";
import "./App.css";
import Header from "./Components/Header.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddBlog from "./Components/AddBlog.jsx";

function App() {
  return (
    <Router>
      <div className="grid h-[2000px] w-screen grid-cols-5 grid-rows-[5%_auto]">
        <div className="flex justify-center col-span-5">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
