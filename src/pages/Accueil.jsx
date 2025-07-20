import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Accueil.module.css';

function Accueil() {
  return (
    <div className={styles.container}>
      <Header page="accueil" />

      <div className={styles.backgroundWrapper}>
        <main className={styles.pageWrapper}>
          <div className={styles.titleCenter}>
            <h1>Bienvenue à INFORMICA</h1>
            <p>L'excellence en formation professionnelle</p>
          </div>

          <section className={styles.buttonSection}>
            <Link to="/entreprise/a-propos" className={`${styles.btnBox} ${styles.btnBoxEnterprise}`}>
              <span className={styles.btnTitle}>Formation Entreprise</span>
              <p className={styles.desc}>
                Formations destinées aux personnels des entreprises
              </p>
            </Link>

            <Link to="/public" className={`${styles.btnBox} ${styles.btnBoxPublic}`}>

              <span className={styles.btnTitle}>Formations Grand Public</span>
              <p className={styles.desc}>
                Formations ouvertes à tous : apprenez et évoluez personnellement et professionnellement.
              </p>
            </Link>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Accueil;
