import React from "react";
import Home from "./components/Home";
import {Route,Routes} from "react-router-dom";
import Details from "./components/Details";
import Header from "./components/Header";

export default function App(){
  return(
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/details" element={<Details />} />
      </Routes>

    </>
  )
}