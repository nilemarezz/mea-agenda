import React from 'react';
import Home from './Home'
import { HashRouter as Router, Route } from 'react-router-dom'
import DayContainer from './DayContainer'
import Header from './image/header.svg';
import Footer from './image/footer.svg';
import Bg from './image/bg.svg'

function App() {
  return (
    <div>
      <img src={Header} alt="bg" style={{ position: 'fixed', width: '60vh' }} />
      <img src={Bg} alt="bg" style={{ position: 'fixed', width: '75vh', marginTop: '4vh', zIndex: 2 }} />
      <Router>
        <Route path="/" component={Home} exact strict />
        <Route path="/day/:id" component={DayContainer} exact strict />
      </Router>
      <img src={Footer} alt="bg" style={{ position: 'fixed', width: '79vh', bottom: 0 }} />
    </div>
  );
}

export default App;
