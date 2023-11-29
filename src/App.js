import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageAd from './pages/PageAd';
import PageSearch from './pages/PageSearch';
import PageUserProfile from './pages/PageUserProfile';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Routes>
          <Route path="/PageSearch" element={<PageSearch />} />
          <Route path="/PageAd/:id" element={<PageAd />} />
          <Route path="/PageUserProfile" element={<PageUserProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
