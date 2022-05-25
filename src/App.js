import './css-reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Nav from './navigation/Nav';
import Profile from './pages/Profile';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rockets from './pages/Rockets';

// const Rockets = React.lazy(() => import('./pages/Rockets'));

function App() {
  return (
    <Router>
      <Nav />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
