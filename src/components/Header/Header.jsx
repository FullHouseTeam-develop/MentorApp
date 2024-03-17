import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import message from '../../assets/icons/message.svg'
import bell from '../../assets/icons/bell.svg'
import user from '../../assets/icons/user.svg'

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.header_info}>
                <img src="https://flomaster.top/uploads/posts/2022-07/1657396841_36-flomaster-club-p-visloukhii-kot-risunok-krasivo-41.jpg" width="68" alt="logo" />
                <h2>MentorApp</h2>  
                <button className={classes.header_link}>Найти ментора</button>
            </div>
            <div className={classes.header_icons}>
            <ul className={classes.header_icons_list}>
                <li className={classes.message}>
                    <img src={message} alt="mes" />
                </li>
                {/* <li className={`${classes.bell} ${classes.mr30}`}>
                    <img src={bell} alt="bell" />
                </li> */}
                <li className={classes.user}>
                    <img src={user} alt="user" />
                </li>
            </ul>
            </div>
        </header>
    );
}

export default Header;
