import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="Agenda">
      <div className="Title">
        <h1>Agenda</h1>
      </div>
      <Link to="/day/1">
        <div className="Day1">
          11 พฤศจิกายน 2563
      </div>
      </Link>
      <Link to="/day/2">
        <div className="Day2">
          12 พฤศจิกายน 2563
      </div>
      </Link>
      <Link to="/day/3">
        <div className="Day3">
          13 พฤศจิกายน 2563
      </div>
      </Link>
    </div>
  )
}

export default Home