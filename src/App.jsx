import { useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import UseState from "./components/UseState";
import Form from "./components/Form";

function App() {
  
  return (
    <>
      {/* <UseState/> */}
      {/* <Form/> */}
      <Router>
        <Routes>
          <Route path="/" element={<UseState/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
