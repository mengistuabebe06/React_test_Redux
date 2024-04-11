import React, { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListFieldRandomPoints from "./componets/RandomGraphComponets/ListFieldRandomPoints";
import ExcelRandomPointsList from "./componets/RandomGraphComponets/ExcelRandomPointsList";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListFieldRandomPoints />} />
          <Route path="/excel" element={<ExcelRandomPointsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
