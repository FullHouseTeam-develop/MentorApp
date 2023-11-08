import React from 'react';
import classes from './AdCard.module.scss';

//mui
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReviewsIcon from '@mui/icons-material/Reviews';

const AdCard = () => {
    return (
      <div className={classes.ad_card}>
        <button className={classes.return_button}>
            <ArrowBackIcon />
        </button>
        <div className={classes.mentor_photo}>
        <div className={classes.blue_square}></div>
            <img src="https://i.pinimg.com/originals/aa/34/bb/aa34bb46682476838eebfb5589350194.jpg" />
        </div>
        <button className={classes.send_message_button}>Отправить сообщение</button>
        <div className={classes.ad_content}>
            <div className={classes.mentor_fullname}>Имя Фамилия</div>
            <ul className={classes.tags}>
                <li>Тэг1</li>
                <li>Тэг2</li>
                <li>Тэг3</li>
            </ul>
            <div className={classes.about_me}>О себе</div>
            <div className={classes.how_can_i_help}>С чем могу помочь</div>
        </div>
        <button className={classes.review_button}>
            <ReviewsIcon />Отзывы
        </button>
      </div>
    );
  };
  
export default AdCard;