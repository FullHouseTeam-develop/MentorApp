import React from 'react';
import classes from './AdCard.module.scss';
import back from '../../assets/icons/arrow-left 1.svg'
import ivan from '../../assets/mentorsPhoto/ivan.svg'
import { Link } from 'react-router-dom';

const AdCard = (props) => {
    return (
      <div className={classes.ad_card}>
        <Link to="/PageSearch"><button className={classes.return_button}>
            <img src={back}/>
        </button></Link>
        <div className={classes.left_part}>
          <div className={classes.mentor_photo}>
              <img src={props.imageUrl} alt="mentor_photo" />
          </div>
          <button className={classes.send_message_button}>Написать сообщение</button>
          <button className={classes.review_button}>Отзывы</button>
        </div>
        <div className={classes.ad_content}>
            <div className={classes.mentor_fullname}>{props.name}</div>
            <ul className={classes.tags}>
                <li><button className={classes.tag}>Дизайн</button></li>
                <li><button className={classes.tag}>Копирайтинг</button></li>
            </ul>
            <div className={classes.about_me}>О себе </div>
            <div className={classes.info}>
              {props.bio}
            </div>
            <div className={classes.how_can_i_help}>С чем могу помочь</div>
              <div className={classes.info}>
                {props.helpDescription}
              </div>
            <div className={classes.price}>{props.price}</div>
        </div>
      </div>
    );
  };
  
export default AdCard;