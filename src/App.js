import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import MentorCard from './components/MainContent/MentorCard';
import Footer from './components/Footer';
import Search from './components/Search';


const App = () => {
  const [mentors, setMentors] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://655453fd63cafc694fe65629.mockapi.io/mentors')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMentors(json);
      });
  }, []);

  // const filteredMentors = mentors.filter((mentor) =>
  //   mentor.name.toLowerCase().includes(searchValue.toLowerCase())
  // );

  return (
    <div className="app-wrapper">
      <Header />
      <div className="main_container">
        <Search setSearchValue={setSearchValue} />
        {mentors.map((obj) => (
          <MentorCard
            key={obj.id}
            name={obj.name}
            bio={obj.bio}
            imageUrl={obj.imageUrl}
            price={obj.price}
            tags={obj.tags}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
