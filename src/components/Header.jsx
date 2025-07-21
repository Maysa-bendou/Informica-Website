import { NavLink } from 'react-router-dom';
import logo from '../assets/image/new_logo.png';
import styles from '../styles/Header.module.css';

function Header({ page }) {
  return (
    <header className={`${styles.mainHeader} ${page === 'accueil' ? styles.accueilHeader : ''}`}>
      <img src={logo} alt="Logo Informica" className={styles.logo} />

      <nav className={styles.nav}>
        {page === 'entreprise' && (
          <>
            <NavLink
              to="/"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/entreprise/a-propos"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              À propos
            </NavLink>
            <NavLink
              to="/entreprise/nos-formations"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              Nos Formations
            </NavLink>
            <NavLink
              to="/entreprise/nos-references"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              Nos Références
            </NavLink>
            <NavLink
              to="/entreprise/contact"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              Contact
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
