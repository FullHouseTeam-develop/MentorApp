import React from 'react';
import classes from './MentorCard.module.scss';
import { Link } from 'react-router-dom';

const MentorCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card_image}>
        <img src={props.imageUrl} alt="mentor" />
      </div>

      <div className={classes.card_info}>
        <div className={classes.card_info_name}>{props.name}</div>

        <div className={classes.card_info_main}>
          <ul>
          {props.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <div className={classes.description}>{props.bio}</div>
        </div>
        <div className={classes.card_info_bottom}>
          <div className={classes.card_info_price}>{props.price}</div>
          <Link  to={`/PageAd/${props.id}` }><button className={classes.card_info_price_btn}>Подробнее</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
