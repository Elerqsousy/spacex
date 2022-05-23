import './css-reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import View from './components/View';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
