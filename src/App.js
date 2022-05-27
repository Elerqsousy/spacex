import './css-reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Nav from './navigation/Nav';
import Profile from './pages/Profile';

const Rockets = React.lazy(() => import('./pages/Rockets'));

function App() {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Rockets />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
