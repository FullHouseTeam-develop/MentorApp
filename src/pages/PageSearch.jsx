import React from 'react';
import MentorCard from '../components/MainContent/MentorCard';
import SearchBar from '../components/Search/SearchBar';
import classes from './PageSearch.module.scss'


function PageSearch() {
  const [mentors, setMentors] = React.useState([]);
  React.useEffect(() => {
    fetch('https://655453fd63cafc694fe65629.mockapi.io/mentors')
      .then((res) => res.json())
      .then((json) => {
        setMentors(json);
      });
  }, []);

  return (
    <div className={classes.main_container}>
      <SearchBar />
      {mentors.map((obj, index) => (
        <MentorCard
          key={index}
          id = {obj.id}
          name={obj.name}
          bio={obj.bio}
          imageUrl={obj.imageUrl}
          price={obj.price}
          tags={obj.tags}
        />
      ))}
    </div>
  );
}

export default PageSearch;
