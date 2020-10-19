import React from "react";
import { withRouter } from 'react-router-dom'
import Day1 from './Day1'
import Day2 from './Day2'
import Day3 from './Day3'
import Back from './image/back.svg'
const Day = (props) => {
  const getData = (value) => {
    if (value === "1") {
      return "11 พฤศจิกายน 2563"
    } else if (value === "2") {
      return "12 พฤศจิกายน 2563"
    } else {
      return "13 พฤศจิกายน 2563"
    }
  }
  const renderContent = (value) => {
    if (value === "1") {
      return <Day1 />
    } else if (value === "2") {
      return <Day2 />
    } else {
      return <Day3 />
    }
  }

  return (
    <>
      <img src={Back} style={{ width: '9vh', position: 'fixed', marginTop: '16vh', zIndex: 2, marginLeft: '2vh' }} onClick={() => props.history.push('/')} />
      <div className="day-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <div style={{ backgroundColor: '#f37021', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0px 20px' }}>
          <div className="day-grow" >
            <h1 style={{ lineHeight: 0, fontSize: 50, color: '#f37021' }}>AGENDA</h1>
          </div>
          <h1 style={{ color: 'white', fontSize: 50 }}>{getData(props.match.params.id)}</h1>
        </div>
        {renderContent(props.match.params.id)}
      </div>
    </>
  )
}

export default withRouter(Day);