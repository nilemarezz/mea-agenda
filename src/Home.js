import React from 'react';
import "./App.css";
import { withRouter } from "react-router-dom"

const Home = (props) => {
  const getDetail = (value) => {
    props.history.push(`${value}`)
  }
  return (
    <div className="home-container">
      <div className="grow-button" >
        <h1 className="title">AGENDA</h1>
      </div>
      <div className="grow-button" onClick={() => getDetail("/day/1")}>
        <h1 className="date-button">11 พฤษจิกายน 2563</h1>
      </div>
      <div className="grow-button" onClick={() => getDetail("/day/2")}>
        <h1 className="date-button">12 พฤษจิกายน 2563</h1>
      </div>
      <div className="grow-button" onClick={() => getDetail("/day/3")}>
        <h1 className="date-button">13 พฤษจิกายน 2563</h1>
      </div>
    </div>
  )
}

export default withRouter(Home)