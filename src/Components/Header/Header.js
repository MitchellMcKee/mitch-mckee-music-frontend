import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={`${styles.headerContainer}`}>
      {props.title}
    </header>
  );
}

export default Header;
