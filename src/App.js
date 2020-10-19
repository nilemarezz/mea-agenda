import React from 'react';
import logo from './logo.svg';
import Home from './Home'
import { Switch, HashRouter as Router, Route } from 'react-router-dom'
import Day from './Day'
import AgendaBg from './image/Asset 1.svg';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact strict />
      <Route path="/day/:id" component={Day} exact strict />

    </Router>
  );
}

export default App;
