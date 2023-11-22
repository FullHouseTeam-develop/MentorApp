import React from 'react'

//components
import MentorCard from '../components/MainContent/MentorCard'
import Search from '../components/Search/Search'

function PageSearch(){
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
    <div>
      <Search/>
      {mentors.map((obj, index) => ( 
        <MentorCard
            key={index}
            name={obj.name}
            bio={obj.bio}
            imageUrl={obj.imageUrl}
            price={obj.price}
            />
      ))}
    </div>
    ); 
}

export default PageSearch;