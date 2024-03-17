import React from 'react';
import UserProfile from '../components/UserProfile';
import UserImagee from '../assets/mentorsPhoto/kate.jpg'

function PageUserProfile() {
  const user = {
    imageUrl: UserImagee,
    firstName: 'Маша',
    lastName: 'Цветаева',
    email: 'm.tsvetaeva@gmail.com',
    socialLink: 'https://www.linkedin.com/in/mtsvetaeva/',
  };

  return (
    <div>
      <UserProfile
        imageUrl={user.imageUrl}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        socialLink={user.socialLink}
      />
    </div>
  );
}

export default PageUserProfile;
