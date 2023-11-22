import React from 'react';
import classes from './AdCard.module.scss';
import back from '../../assets/icons/arrow-left 1.svg'
import ivan from '../../assets/mentorsPhoto/ivan.svg'

const AdCard = () => {
    return (
      <div className={classes.ad_card}>
        <button className={classes.return_button}>
            <img src={back}/>
        </button>
        <div className={classes.left_part}>
          <div className={classes.mentor_photo}>
              <img src={ivan} />
          </div>
          <button className={classes.send_message_button}>Написать сообщение</button>
          <button className={classes.review_button}>Отзывы</button>
        </div>
        <div className={classes.ad_content}>
            <div className={classes.mentor_fullname}>Иван Иванов</div>
            <ul className={classes.tags}>
                <li><button className={classes.tag}>Дизайн</button></li>
                <li><button className={classes.tag}>Копирайтинг</button></li>
            </ul>
            <div className={classes.about_me}>О себе </div>
            <div className={classes.info}>
              Закончил государственный университет университет города N. Являюсь экспертом в области копирайтинга 
и вставки шаблонного текста в дизайн проект.
            </div>
            <div className={classes.how_can_i_help}>С чем могу помочь</div>
              <div className={classes.info}>
              Могу придумать, что вам написать в будущих текстовых полях, чтобы страничка казалась полной и не выглядела пустой.  
            </div>
            <div className={classes.price}>от 2000 руб</div>
        </div>
      </div>
    );
  };
  
export default AdCard;