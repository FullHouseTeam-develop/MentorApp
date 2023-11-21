import './App.css';
import React , {useState} from 'react';
import Header from './components/Header';
import MentorCard from './components/MainContent/MentorCard';
import Footer from './components/Footer';
import Search from './components/Search';




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
      <div className='main_container'>
      <Search/>
      {mentors.map((obj) => ( 
        <MentorCard
            name={obj.name}
            bio={obj.bio}
            imageUrl={obj.imageUrl}
            price={obj.price}
            />
      ))}
      </div>
      <Footer/>
    </div>
  ); 
  
}


export default App;