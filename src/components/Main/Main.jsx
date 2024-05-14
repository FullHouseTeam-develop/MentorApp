import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Main.module.scss';
import ill1 from '../../assets/icons/illustration1.png';
import ill2 from '../../assets/icons/illustration2.png';

function Main() {
    return (
        <div className={classes.main_content}>
            <div className={classes.main_content_first}>
                <div className={classes.main_content_description}>
                    <div className={classes.description_slogan_start}>Жизнь слишком коротка,</div>
                    <div className={classes.description_slogan_end}>чтобы учить самостоятельно то,<br />
                                                                    что тебе могут объяснить</div>
                    <div className={classes.description_action}>Не теряй времени —</div>
                    <button className={classes.description_action_button}>найди своего ментора</button>
                </div>
                <div className={classes.illustration1}>
                    <img src={ill1} alt="Illustartion" />
                </div>
            </div>
            <div className={classes.main_content_second}>
                <div className={classes.main_content_second_reasons}>
                    <div className={classes.main_content_second_reasons_theme}>Зачем нужны менторы?</div>
                    <div className={classes.reasons_point}>
                        <div className={classes.reasons_point_headline}>1. Опыт и знания</div>
                        <div className={classes.reasons_point_text}>Менторы обладают ценным опытом и знаниями, которые они могут передать своим подопечным, помогая им избежать ошибок и принимать обдуманные решения.</div>
                    </div>
                    <div className={classes.reasons_point}>
                        <div className={classes.reasons_point_headline}>2. Развитие навыков</div>
                        <div className={classes.reasons_point_text}>Менторы помогают развивать навыки своих подопечных, помогая им стать более компетентными и уверенными в своих способностях.</div>
                    </div>
                    <div className={classes.reasons_point}>
                        <div className={classes.reasons_point_headline}>3. Мотивация и вдохновение</div>
                        <div className={classes.reasons_point_text}>Менторы могут стать источником мотивации и вдохновения для своих подопечных, помогая им преодолевать трудности и стремиться к новым достижениям.</div>
                    </div>
                </div>
                <div className={classes.illustration2}>
                    <img src={ill2} alt="Illustration" />
                </div>
            </div>
            <div className={classes.main_content_third}>
                <div className={classes.main_content_third_theme}>Как найти своего ментора?</div>
                <div className={classes.steps}>
                    <div className={classes.step}>
                        <div className={classes.step_headline}>1. Определите свою цель</div>
                        <div className={classes.step_text}>Прежде всего, определите, какие цели вы хотите достичь, какие навыки хотите развить и какая область знаний вас интересует.</div>
                    </div>
                    <div className={classes.step}>
                        <div className={classes.step_headline}>2. Просмотрите менторов</div>
                        <div className={classes.step_text}>Найдите людей, которые имеют опыт и знания в интересующей вас области.</div>
                    </div>
                    <div className={classes.step}>
                        <div className={classes.step_headline}>3. Отберите нескольких</div>
                        <div className={classes.step_text}>Просмотрите карточки найденных менторов и выберите тех, кого посчитаете самыми компетентными.</div>
                    </div>
                    <div className={classes.step}>
                        <div className={classes.step_headline}>4. Установите контакт</div>
                        <div className={classes.step_text}>У каждого ментора во вкладке "Подробнее" есть несколько способов связи. Выберите самый удобный и обсудите с ментором вашу консультацию.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
