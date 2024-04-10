import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListFieldRandomPoints from "./componets/RandomGraphComponets/ListFieldRandomPoints";
import ExcelRandomPointsList from "./componets/RandomGraphComponets/ExcelRandomPointsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/field" element={<ListFieldRandomPoints />} />
          <Route path="/excel" element={<ExcelRandomPointsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
