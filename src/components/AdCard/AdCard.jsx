import React from 'react';
import classes from './AdCard.module.scss';
import back from '../../assets/icons/arrow-left 1.svg';
import { Link } from 'react-router-dom';
//change
const AdCard = (props) => {
  return (
    <div className={classes.ad_card}>
      <Link to="/PageSearch">
        <button className={classes.return_button}>
          <img src={back} alt="back" />
        </button>
      </Link>
      <div className={classes.left_part}>
        <div className={classes.mentor_photo}>
          <img src={props.imageUrl} alt="mentor_photo" />
        </div>

        <div className={classes.contact_info}>
          <div className={classes.contact_text}>Как связаться?</div>
          <ul>
            <li>Email: {props.email}</li>
            <li>Соц. сеть: {props.socialLink}</li>
          </ul>
        </div>
        
      </div>
      <div className={classes.ad_content}>
        <div className={classes.mentor_fullname}>{props.full_name}</div>
        <ul>
          {props.tags?.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className={classes.about_me}>О себе </div>
        <div className={classes.info}>{props.experience}</div>
        <div className={classes.how_can_i_help}>С чем могу помочь</div>
        <div className={classes.info}>{props.helpDescription}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
    </div>
  );
};

export default AdCard;
