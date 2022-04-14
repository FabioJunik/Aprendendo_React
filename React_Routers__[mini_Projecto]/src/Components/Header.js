import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from'./Header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink to='/' className={styles.link} activeClassName={styles.active}>Produtos</NavLink>
        </li>
        <li>
          <NavLink to='contatos' className={styles.link} activeClassName={styles.active}>Contacto</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header