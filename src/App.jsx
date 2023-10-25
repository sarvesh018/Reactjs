import { useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import UseState from "./components/UseState";
import Form from "./components/Form";
import Home from "./components/Home";
import CheckBox from "./components/CheckBox";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="form" element={<Form/>}/>
          <Route path="useState" element={<UseState/>}/>
          <Route path="checkBox" element={<CheckBox/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
