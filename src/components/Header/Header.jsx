import React from 'react';
import classes from './Header.module.scss';
import message from '../../assets/icons/message.svg'
import user from '../../assets/icons/user.svg'
import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.header_info}>
                <img src={logo} width="68" alt="logo" />
                <Link to="/PageSearch" className={classes.link_main}>
                <h2>MentorApp</h2>  
                </Link>
                <button className={classes.header_link}>Найти ментора</button>
            </div>
            <div className={classes.header_icons}>
            <ul className={classes.header_icons_list}>
                <li className={classes.message}>
                    <img src={message} alt="mes" />
                </li>
                <li className={classes.user}>
                    <Link to="PageUserProfile">
                    <img src={user} alt="user" />
                    </Link>
                </li>
            </ul>
            </div>
        </header>
    );
}

export default Header;
