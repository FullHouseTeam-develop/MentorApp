import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageAd from './pages/PageAd';
import PageSearch from './pages/PageSearch';
import PageUserProfile from './pages/PageUserProfile';
import PageMentorProfile from './pages/PageMentorProfile'
import AutorizationPage from './pages/AutorizationPage';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        
        <main className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/PageSearch" element={<PageSearch />} />
          <Route path="/PageAd/:id" element={<PageAd />} />
          <Route path="/PageUserProfile" element={<PageUserProfile />} />
          <Route path="/PageMentorProfile" element={<PageMentorProfile />} />
          <Route path="/AutorizationPage" element={<AutorizationPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
        </Routes>
        </main>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;