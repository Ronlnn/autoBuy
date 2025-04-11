import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/Sovkom_logo.png';
import { Link } from 'react-router-dom';
import CallButton from '../CallButton/CallButton.tsx';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt='Logo' className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <Link to='/partners' className={styles.navLink}>
          Партнёры
        </Link>
        <a href='#footer' className={styles.navLink}>
          Написать нам
        </a>
      </nav>
	  <CallButton/>
    </header>
  );
};

export default Header;
