import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ page }) {
  return (
    <header className={`${styles.mainHeader} ${page === 'accueil' ? styles.accueilHeader : ''}`}>
      <div className={styles.headerContainer}>
        <img src="/assets/image/new_logo.png" alt="Logo Informica" className={styles.logo} />

        <nav className={styles.nav}>
          {page === 'entreprise' && (
            <>
              <NavLink
                to="/"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                <span>Accueil</span>
              </NavLink>
              <NavLink
                to="/entreprise/a-propos"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                <span>À propos</span>
              </NavLink>
              <NavLink
                to="/entreprise/nos-formations"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                <span>Nos Formations</span>
              </NavLink>
              <NavLink
                to="/entreprise/nos-references"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                <span>Nos Références</span>
              </NavLink>
              <NavLink
                to="/entreprise/contact"
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                <span>Contact</span>
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;