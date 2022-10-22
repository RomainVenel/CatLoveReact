import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Vote from "./pages/Vote";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="vote" element={<Vote />} />
                  <Route path="contact" element={<Contact />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
