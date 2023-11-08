import React from 'react';
import classes from './Header.module.scss';
import message from '../../assets/icons/message.svg'
import bell from '../../assets/icons/bell.svg'
import user from '../../assets/icons/user.svg'

    function Header() {
        return (
                <header className={classes.header}>
                    <div className='logo'>
                        <img src="https://flomaster.top/uploads/posts/2022-07/1657396841_36-flomaster-club-p-visloukhii-kot-risunok-krasivo-41.jpg" width="40" />
                        </div>
                        <div className={classes.header_info}>
                            <h3 className='text-uppercase'>Mentor App</h3>
                            <span className={classes.header_link} >Найти</span>
                        </div>


                    <ul className='d-flex clear'>
                    <li className={`${classes.message} ${classes.mr30}`}>  
                            <img src={message} />
                        </li>
                        <li className={`${classes.bell} ${classes.mr30}`}>
                            <img src={bell} />
                        </li>
                        <li className={classes.user}>
                            <img src={user}/>
                        </li>
                    </ul>
                </header>     
    );
}

export default Header;
