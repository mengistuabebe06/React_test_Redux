import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ListFieldRandomPoints from "./componets/RandomGraphComponets/ListFieldRandomPoints";
import ExcelRandomPointsList from "./componets/RandomGraphComponets/ExcelRandomPointsList";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<ListFieldRandomPoints />} />
          <Route path="/excel" element={<ExcelRandomPointsList />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
