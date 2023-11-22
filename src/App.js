import './App.css';
import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import PageAd from './pages/PageAd';
import PageSearch from './pages/PageSearch';

const App = () =>{
const [mentors, setMentors] = React.useState([]); 

React.useEffect(() =>{
  fetch('https://655453fd63cafc694fe65629.mockapi.io/mentors')
    .then((res)=>{
    return res.json();
  })
    .then((json)=>{
    setMentors(json);
  });
},[]);

  return(
    <div className='app-wrapper'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/PageSearch" element={<PageSearch/>}/>
          <Route path="/PageAd" element={<PageAd />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  ); 
}

export default App;