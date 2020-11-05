import React from 'react';
import Home from './Home'
import { HashRouter as Router, Route } from 'react-router-dom'
import DayContainer from './DayContainer'

function App() {
  return (
    <div>

      <Router>
        <Route path="/" component={Home} exact strict />
        <Route path="/day/:id" component={DayContainer} exact strict />
      </Router>

    </div>
  );
}

export default App;
