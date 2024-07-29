import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searching/searching';
import HomePage from './components/home';
import HostingComponent from './components/hostingcomponent';
import ResultsBox from './components/searching/caja_resultados';
import Login from './components/Usuario/login';
import Register from './components/Usuario/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<SearchBar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
