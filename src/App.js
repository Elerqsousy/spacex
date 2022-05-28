import './css-reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Nav from './navigation/Nav';
import Profile from './pages/Profile';
import Missions from './pages/mission/Missions';
import Rockets from './pages/Rockets';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mission" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
