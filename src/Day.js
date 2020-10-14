import React from "react";
import { withRouter } from 'react-router-dom'
const Day = (props) => {
  console.log(props)
  const getData = (value) => {
    if (value === "1") {
      return "11 พฤศจิกายน 2563"
    } else if (value === "2") {
      return "12 พฤศจิกายน 2563"
    } else {
      return "13 พฤศจิกายน 2563"
    }
  }
  return (
    <h1>{getData(props.match.params.id)}</h1>
  )
}

export default withRouter(Day);