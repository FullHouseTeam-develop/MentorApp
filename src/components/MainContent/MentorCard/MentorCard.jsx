import React from 'react';
import classes from './MentorCard.module.scss';


const MentorCard = (props) => {
  return (
    <div className={classes.card}>
                <div className={classes.card_content}>
                <div className={classes.blue_square}></div>
                    <img src={props.imageUrl} alt ="Photo" /> 
                </div>
                <div className={classes.card_info}>
                    <div className={classes.info_top}>
                        <div>
                            <p>{props.name}</p>
                        </div>
                         <div>{props.bio}</div>
                        <ul className={classes.tags}>
                            <li>Тэг1</li>
                            <li>Тэг2</li>
                            <li>Тэг3</li>
                        </ul>
                    </div>
                    <div className={classes.info_bottom}>
                        <div className='price'>
                            <span>Цена: </span>
                            <b>{props.price}</b>
                        </div>
                        <button className='button'>Подробнее</button>
                    </div>
                </div>
            </div>

  );
};

export default MentorCard;
