import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth } from "../pages";

const Myroutes = () => {
  const [logedIn, setLogedIn] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home logedIn={logedIn} setLogedIn={setLogedIn} />} />
          <Route path="/login" element={<Auth logedIn={logedIn} setLogedIn={setLogedIn} />} />
        </Routes>
      </Router>
    </>
  );
};

export default Myroutes;
