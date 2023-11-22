import React , {useState} from 'react';

//components
import MentorCard from '../components/MainContent/MentorCard';
import Search from '../components/Search';

const arr=[{
  name:'Бан Чан', bio: 'пишу песни', imageUrl: require('../assets/mentorsPhoto/Soonie.jpg'), price:'100руб'},
  {name:'Стая Ходарева', bio: 'пишу код', imageUrl:require('../assets/mentorsPhoto/taya.jpg'),price:'200руб'},
  {name:'Катя Зайцева', bio: 'пишу код', imageUrl: require('../assets/mentorsPhoto/kate.jpg'), price:'300руб'}
];


function PageSearch(){
  return(
    <div>
      <Search/>
      {arr.map((obj) => ( 
        <MentorCard
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