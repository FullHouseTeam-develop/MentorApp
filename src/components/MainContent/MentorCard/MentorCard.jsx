import React from 'react';
import classes from './MentorCard.module.scss';
import { Link } from 'react-router-dom';

const MentorCard = ({card : { id, imageUrl, full_name, tags, experience, price }}) => {
  return (
    <div className={classes.card}>
      <div className={classes.card_image}>
        <img src={imageUrl} alt="mentor" />
      </div>

      <div className={classes.card_info}>
        <div className={classes.card_info_name}>{full_name}</div>

        <div className={classes.card_info_main}>
          <ul>
          {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <div className={classes.description}>{experience}</div>
        </div>
        <div className={classes.card_info_bottom}>
          <div className={classes.card_info_price}>{price}</div>
          <Link  to={`/PageAd/${id}` }><button className={classes.card_info_price_btn}>Подробнее</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
