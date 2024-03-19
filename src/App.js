import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageAd from './pages/PageAd';
import PageSearch from './pages/PageSearch';
import PageUserProfile from './pages/PageUserProfile';
import AutorizationPage from './pages/AutorizationPage';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
        <Routes>
          <Route path="/PageSearch" element={<PageSearch />} />
          <Route path="/PageAd/:id" element={<PageAd />} />
          <Route path="/PageUserProfile" element={<PageUserProfile />} />
          <Route path="/AutorizationPage" element={<AutorizationPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
