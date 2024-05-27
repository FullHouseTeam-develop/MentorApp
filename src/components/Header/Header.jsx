import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import logo from '../../assets/icons/logotype.png'

function Header() {
    return(
        <header className={classes.header_main}>
            <div className={classes.header_one}>
            <Link to='/'>
                <div className={classes.header_logo}>
                    <img src={logo} alt='logo' />
                </div>
            </Link>

            <Link to='/' className={classes.header_logo_text}>
                MentorApp
            </Link>

            <Link to='/PageSearch'>
                <button className={classes.header_button_find}>Найти ментора</button>
            </Link>

            </div>
            
            <div>
            <Link to='/AutorizationPage'>
                <button className={classes.header_button_autorization}>Регистрация</button>
            </Link>
            <Link to='/SignInPage'>
                <button className={classes.header_button_signin}>Войти</button>
            </Link>
            </div>
        </header>
    )
}

// function Header() {
//     return (
//         <header className={classes.header}>
//             <div className={classes.header_info}>
//                 <img src={logo} alt="logo" />
//                 <Link to="/PageSearch" className={classes.link_main}>
//                 <h2>MentorApp</h2>  
//                 </Link>
//                 <button className={classes.header_link}>Найти ментора</button>
//             </div>
//             <div className={classes.header_icons}>
//             <ul className={classes.header_icons_list}>
//                 <li className={classes.user}>
//                     <Link to="PageUserProfile">
//                     <img src={userr} alt="user" />
//                     </Link>
//                 </li>
//             </ul>
//             </div>
//         </header>
//     );
// }

export default Header;
