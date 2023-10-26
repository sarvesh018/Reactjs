import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import UseState from "./components/UseState";
import Form from "./components/Form";
import Home from "./components/Home";
import MoveItems from "./components/MoveItems";
import Temp from "./components/Temp";
import JsonAPI from "./components/JsonAPI";
import GoBack from "./components/GoBack";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="form" element={<Form/>}/>
          <Route path="useState" element={<UseState/>}/>
          <Route path="moveItems" element={<MoveItems/>}/>
          <Route path="temp" element={<Temp/>}/>
          <Route path="jsonAPI" element={<JsonAPI/>}/>
          <Route path="goBack" element={<GoBack/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
