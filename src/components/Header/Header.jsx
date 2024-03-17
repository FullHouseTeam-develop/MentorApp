import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import userr from '../../assets/icons/userr.svg'
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
                <li className={classes.user}>
                    <Link to="PageUserProfile">
                    <img src={userr} alt="user" />
                    </Link>
                </li>
            </ul>
            </div>
        </header>
    );
}

export default Header;
