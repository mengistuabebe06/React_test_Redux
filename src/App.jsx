import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListFieldRandomPoints from "./componets/RandomGraphComponets/ListFieldRandomPoints";
import ExcelRandomPointsList from "./componets/RandomGraphComponets/ExcelRandomPointsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/field" element={<ListFieldRandomPoints />} />
          <Route path="/excel" element={<ExcelRandomPointsList />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
