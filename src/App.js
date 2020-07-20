import React from 'react';
import HomePage from './pages/HomePage'
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={HomePage} exact/>
      <Route path="/about" component={AboutPage} exact/>
    </div>
    </Router>
  );
}

export default App;
