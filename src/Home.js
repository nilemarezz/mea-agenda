import React from 'react';
import "./App.css";
import { withRouter } from "react-router-dom"

const Home = (props) => {
  const getDetail = (value) => {
    props.history.push(`${value}`)
  }
  return (
    <>
      <img src={process.env.PUBLIC_URL + '/image/header.svg'} alt="bg" style={{ position: 'fixed', width: '60vh' }} />
      <img src={process.env.PUBLIC_URL + '/image/bg.svg'} alt="bg" style={{ position: 'fixed', width: '75vh', zIndex: 2, marginTop: '4vh' }} />
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
      <img src={process.env.PUBLIC_URL + '/image/footer.svg'} alt="bg" style={{ position: 'fixed', width: '79vh', bottom: 0 }} />
    </>

  )
}

export default withRouter(Home)