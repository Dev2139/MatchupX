import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auction from './pages/Auction';
import Teams from './pages/Teams';
import Stats from './pages/Stats';
import Scoreboard from './components/Scoreboard';
import MatchSchedule from './components/MatchSchedule';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/matches" element={<MatchSchedule />} />
          <Route path="/matches/:id" element={<Scoreboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;