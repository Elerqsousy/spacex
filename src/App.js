import './css-reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './navigation/Nav';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
