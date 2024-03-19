import React from 'react';
import classes from './Autorization.module.scss';

function Autorization() {
    return(
        <div className={classes.autorization_main}>
            <div className={classes.autorization_headline}>Регистрация</div>
            <input placeholder="Имя" className={classes.autorization_input}/>
            <input placeholder="Email" className={classes.autorization_input}/>
            <input placeholder="Пароль" className={classes.autorization_input}/>
            <input placeholder="Введите пароль еще раз" className={classes.autorization_input}/>
            <button className={classes.autorization_button}><div className={classes.autorization_button_text}>Продолжить</div></button>
        </div>
    )
}

export default Autorization;