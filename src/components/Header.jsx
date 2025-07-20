import { Link } from 'react-router-dom';
import logo from '../assets/image/new_logo.png';
import styles from '../styles/Header.module.css'; 

function Header({ page, activeSection }) {
  return (
    <header
      className={`${styles.mainHeader} ${page === 'accueil' ? styles.accueilHeader : ''}`}
    >
      <img src={logo} alt="Logo Informica" className={styles.logo} />

      <nav className={styles.nav}>
        {page === 'entreprise' && (
          <>
            <Link to="/" className={styles.navLink}>Accueil</Link>
            <Link
              to="/entreprise/a-propos"
              className={`${styles.navLink} ${activeSection === 'A_propos' ? styles.active : ''}`}
            >
              À propos
            </Link>
            <Link
              to="/entreprise/nos-formations"
              className={`${styles.navLink} ${activeSection === 'Nos_formations' ? styles.active : ''}`}
            >
              Nos Formations
            </Link>
            <Link
              to="/entreprise/nos-references"
              className={`${styles.navLink} ${activeSection === 'Nos_Références' ? styles.active : ''}`}
            >
              Nos Références
            </Link>
            <Link
              to="/entreprise/contact"
              className={`${styles.navLink} ${activeSection === 'Contact' ? styles.active : ''}`}
            >
              Contact
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
