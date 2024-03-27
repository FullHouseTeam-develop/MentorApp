import React from 'react';
import MentorCard from '../components/MainContent/MentorCard';
import SearchBar from '../components/Search/SearchBar';
import classes from './PageSearch.module.scss'


function PageSearch() {
  const [mentors, setMentors] = React.useState([]);
  React.useEffect(() => {
    fetch('https://655453fd63cafc694fe65629.mockapi.io/mentors')
      .then((res) => res.json())
      .then((mentorsData) => {
        fetch('https://655453fd63cafc694fe65629.mockapi.io/users')
        .then((res) => res.json())
        .then((userData) =>{ // сопоставление id равно user_id ментора
          const mentorsWithUsers = mentorsData.map((mentor) =>{
            const user = userData.find((user) => user.id === mentor.user_id);
            return {...mentor,
              full_name: user ? user.full_name : '',
            };
          });
          setMentors(mentorsWithUsers);
        });
      });
  }, []);

  return (
    <div className={classes.main_container}>
      <SearchBar />
      {mentors.map((obj) => (
        <MentorCard
          key={obj.id}
          card={obj}
        />
      ))}
    </div>
  );
}

export default PageSearch;
