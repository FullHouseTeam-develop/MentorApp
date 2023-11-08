import './App.css';
import React , {useState} from 'react';
import Header from './components/Header';
import MentorCard from './components/MainContent/MentorCard';
import Footer from './components/Footer';

const arr=[{
  name:'Бан Чан', bio: 'пишу песни', imageUrl: '/mentorsPhoto/Soonie.jpg'},
  {name:'Стая Ходарева', bio: 'пишу код', imageUrl:'/mentorsPhoto/taya.jpg'},
  {name:'Катя Зайцева', bio: 'пишу код', imageUrl: '/mentorsPhoto/kate.jpg'}
];


const App = () =>{
  return(
    <div className='app-wrapper'>
      <div className='app-header'><Header/></div>
      {arr.map((obj) => ( 
        <MentorCard
            name={obj.name}
            bio={obj.bio}
            imageUrl={obj.imageUrl}
            />
      ))}
      
      <div className='app-footer'><Footer/></div>
    </div>
  ); 
  
}


export default App;