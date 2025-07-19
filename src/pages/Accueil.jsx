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
            <div
              className={styles.btnBoxEnterprise}
              onClick={() => (window.location.href = "/entreprise")}
            >
              <span className={styles.btnTitle}>Formation Entreprise</span>
              <p className={styles.desc}>
                Formations destinées aux personnels des entreprises
              </p>
            </div>

            <div
              className={styles.btnBoxPublic}
              onClick={() => (window.location.href = "/public")}
            >
              <span className={styles.btnTitle}>Formations Grand Public</span>
              <p className={styles.desc}>
                Formations ouvertes à tous: apprenez et évoluez-personnellement et professionnellement.
              </p>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Accueil;
