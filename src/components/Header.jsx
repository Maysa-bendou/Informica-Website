import { Link } from 'react-router-dom';
import logo from '../assets/image/new_logo.png';
import styles from '../styles/Header.module.css'; 

function Header({ page, activeSection }) {
  const navItems = [
    { id: 'A_propos', label: 'A propos' },
    { id: 'Nos_formations', label: 'Nos Formations' },
    { id: 'Nos_Références', label: 'Nos Références' },
    { id: 'Contact', label: 'Contact' },
  ];

  return (
    <header
      className={`${styles.mainHeader} ${page === 'accueil' ? styles.accueilHeader : ''}`}
    >
      <img src={logo} alt="Logo Informica" className={styles.logo} />

      <nav className={styles.nav}>
        {page === 'entreprise' && (
          <>
            <Link to="/" className={styles.navLink}>Accueil</Link>
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
              >
                {label}
              </a>
            ))}
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
