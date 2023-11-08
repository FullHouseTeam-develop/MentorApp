import './App.css';
import React , {useState} from 'react';
import Header from './components/Header';
import MentorCard from './components/MainContent/MentorCard';
import Footer from './components/Footer';


const App = () =>{
  return(
    <div className='app-wrapper'>
      <div className='app-header'><Header/></div>
      <div className='app-card'><MentorCard/></div>
      <div className='app-card'><MentorCard/></div>
      <div className='app-catd'><Footer/></div>
    </div>
  ); 
  
}


export default App;