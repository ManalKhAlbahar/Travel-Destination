import './App.css';
import Home from "./components/Home/Home.js";
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails";
const travelData = require("./data/db.json");


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home tourData={travelData}/>} />
        <Route path="/city/:id" element={< TourDetails tourData={travelData}/>} />
      </Routes>
    </>
  )
}
// <Home tourData={travelData}/>