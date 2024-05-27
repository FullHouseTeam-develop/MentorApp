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
                    <Link to='/PageSearch'><button className={classes.description_action_button}>найди своего ментора</button></Link>
                </div>
                <div className={classes.illustration1}>
                    <img src={ill1} alt="Illustartion" />
                </div>
            </div>
            <div className={classes.main_content_second}>
                <div className={classes.main_content_second_reasons}>
                    <div className={classes.main_content_second_reasons_theme}>Зачем нужны менторы?</div>
                    <div className={classes.reasons_point}>
                        <div className={classes.reasons_point_headline}>Опыт и знания</div>
                        <div className={classes.reasons_point_text}>Менторы обладают ценным опытом и знаниями, которые они могут передать своим подопечным, помогая им избежать ошибок и принимать обдуманные решения.</div>
                    </div>
                    <div className={classes.reasons_point}>
                        <div className={classes.reasons_point_headline}>Развитие навыков</div>
                        <div className={classes.reasons_point_text}>Менторы помогают развивать навыки своих подопечных, помогая им стать более компетентными и уверенными в своих способностях.</div>
                    </div>
                    <div className={classes.reasons_point}>
                        <div className={classes.reasons_point_headline}>Мотивация и вдохновение</div>
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
                        <div className={classes.step_headline}>Определите свою цель</div>
                        <div className={classes.step_text}>Прежде всего, определите, какие цели вы хотите достичь, какие навыки хотите развить и какая область знаний вас интересует.</div>
                    </div>
                    <div className={classes.step}>
                        <div className={classes.step_headline}>Просмотрите менторов</div>
                        <div className={classes.step_text}>Найдите людей, которые имеют опыт и знания в интересующей вас области. Внимательно просмотрите весь список потенциальных менторов.</div>
                    </div>
                </div>
                <div className={classes.steps}>
                    <div className={classes.step}>
                        <div className={classes.step_headline}>Отберите нескольких</div>
                        <div className={classes.step_text}>Среди списка менторов найдите тех, кого посчитаете самыми компетентными в данной области, основываясь на их описании и опыте.</div>
                    </div>
                    <div className={classes.step}>
                        <div className={classes.step_headline}>Установите контакт</div>
                        <div className={classes.step_text}>У каждого ментора во вкладке «Подробнее» описаны несколько способов связи. Выберите самый удобный для вас и обсудите с ментором возможность сотрудничества.</div>
                    </div>
                </div>
                {/* <div className={classes.illustration3}>
                    <img src={ill3} alt="Illustration" />
                </div> */}
            </div>
            <div className={classes.main_content_fourth}>
                <div className={classes.fourth_headline}>Присоединяйтесь к нам уже сегодня!</div>
                <div className={classes.fourth_text}>Хочешь найти своего опытного ментора в интересующей области? Регистрируйся прямо сейчас и открой новые горизонты развития! Твой идеальный наставник уже ждет тебя, не упусти свой шанс!</div>
                <Link to='/AutorizationPage'><button className={classes.fourth_button}>Зарегистрироваться</button></Link>
            </div>
        </div>
    );
}

export default Main;
