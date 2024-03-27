import React, { useEffect, useState } from 'react';
import AdCard from '../components/AdCard';
import { useParams } from 'react-router-dom';

function PageSearch() {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    // Запрос к эндпоинту mentors для получения данных о менторе
    fetch(`https://655453fd63cafc694fe65629.mockapi.io/mentors/${id}`)
      .then((res) => res.json())
      .then((mentorData) => {
        // Сохраняем данные о менторе
        setMentor(mentorData);
      })
      .catch((error) => console.error('Error fetching mentor data:', error));
  }, [id]);

  if (!mentor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AdCard
        mentor_id={mentor.mentor_id}
        full_name={mentor.full_name}
        experience={mentor.experience}
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

export default PageSearch;
