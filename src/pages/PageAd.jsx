import React from "react";

//components
import AdCard from "../components/AdCard";

function PageAd(){
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
            {mentors.map((obj) => ( 
        <AdCard
            name={obj.name}
            bio={obj.bio}
            helpDescription={obj.helpDescription}
            imageUrl={obj.imageUrl}
            price={obj.price}
            />
      ))}
        </div>
    )
}

export default PageAd; 