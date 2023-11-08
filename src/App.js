import './App.css';
import React , {useState} from 'react';
import Header from './components/Header';
import MentorCard from './components/MainContent/MentorCard';
import Footer from './components/Footer';
import Search from './components/Search';

const arr=[{
  name:'Бан Чан', bio: 'пишу песни', imageUrl: require('./assets/mentorsPhoto/Soonie.jpg'), price:'100руб'},
  {name:'Стая Ходарева', bio: 'пишу код', imageUrl:require('./assets/mentorsPhoto/taya.jpg'),price:'200руб'},
  {name:'Катя Зайцева', bio: 'пишу код', imageUrl: require('./assets/mentorsPhoto/kate.jpg'), price:'300руб'}
];


const App = () =>{
  return(
    <div className='app-wrapper'>
      <Header/>
      <Search/>
      {arr.map((obj) => ( 
        <MentorCard
            name={obj.name}
            bio={obj.bio}
            imageUrl={obj.imageUrl}
            price={obj.price}
            />
      ))}
      <Footer/>
    </div>
  ); 
  
}


export default App;