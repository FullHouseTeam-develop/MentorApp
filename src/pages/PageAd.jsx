
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdCard from '../components/AdCard';

function PageAd() {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    fetch(`https://655453fd63cafc694fe65629.mockapi.io/mentors/${id}`)
      .then((res) => res.json())
      .then((json) => setMentor(json))
      .catch((error) => console.error('Error fetching mentor:', error));
  }, [id]);

  if (!mentor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AdCard
        id={mentor.id}
        name={mentor.name}
        bio={mentor.bio}
        helpDescription={mentor.helpDescription}
        imageUrl={mentor.imageUrl}
        price={mentor.price}
        tags={mentor.tags}
        email={mentor.email}
        socialLink={mentor.socialLink}
      />
    </div>
  );
}

export default PageAd;
