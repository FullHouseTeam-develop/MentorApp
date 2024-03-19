import React from 'react';
import classes from './SignIn.module.scss';

function SignIn() {
    return(
        <div className={classes.signin_main}>
            <div className={classes.signin_headline}>Вход</div>
            <input placeholder='Email' className={classes.signin_input} />
            <input placeholder='Пароль' className={classes.signin_input} />
            <div className={classes.signin_link_main}>
                <button className={classes.signin_link}>Забыли пароль?</button>
                <button className={classes.signin_link}>У меня еще нет аккаунта</button>
            </div>
            <button className={classes.signin_button}><div className={classes.signin_button_text}>Войти</div></button>
        </div>
    )
}

export default SignIn;