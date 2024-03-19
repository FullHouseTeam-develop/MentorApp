import React from 'react';
import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logotype.png'

function Footer() {
  return(
    <footer className={classes.footer_main}>
      <div className={classes.footer_line} />
      <Link to='/PageSearch'>
        <div className={classes.footer_logo}>
          <img src={logo} alt='logo' />
        </div>
      </Link>
      <Link to='/PageSearch' className={classes.footer_logo_text}>
        MentorApp
      </Link>
      <div className={classes.footer_middle}>
        Часто задаваемые вопросы <br /><br />
        Помощь <br />
        Как это работает <br />
        Контакты <br />
      </div>
      <div className={classes.footer_right}>
        Юридическая информация <br /><br />
        Условия пользования <br />
        Политика конфиденциальности <br />
        О нас <br />
      </div>
    </footer>
  )
}

// const Footer = () => {
//   return (
//         <footer className={classes.footer}>
//             <p className={classes.footer_text}>Информация о сайте</p>
// </footer>
//   );
// }
export default Footer;