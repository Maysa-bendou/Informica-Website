import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/PageEntreprise.module.css';
import management from '../../assets/image/management-svgrepo-com (1).svg';
import hr from '../../assets/image/human-resources-search-svgrepo-com.svg';
import finance from '../../assets/image/finance-svgrepo-com.svg';
import marketing from '../../assets/image/marketing-bill-payment-invoice-receipt-svgrepo-com (1).svg';
import it from '../../assets/image/computer-14-svgrepo-com.svg';
import qhse from '../../assets/image/environment-nature-environmental-protection-trees-svgrepo-com.svg';
import langues from '../../assets/image/language-translation-svgrepo-com (1).svg';

function NosFormations() {
  return (
    <section id="Nos_formations" className={styles.sectionFormations}>
      <div className={styles.horizontalContainer}>
        <div className={styles.leftSection}>
          <h2 className={styles.sectionTitle}>Savoir-faire de nos formateurs à travers nos catalogues</h2>

          <div className={styles.formationsGrid}>
            <div className={styles.formationCard}>
              <h3 className={styles.formationTitle}>HSE : Hygiène, Sécurité et Environnement</h3>
            </div>

            <div className={styles.formationCard}>
              <h3 className={styles.formationTitle}>Catalogue général</h3>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <h2 className={styles.sectionTitle}>Découvrez nos formations classées<br /> par domaine</h2>

          <div className={styles.formationsGrid}>
            <Link to="/formations/management" className={styles.formationCard}>
              <img src={management} alt="Management Icon" className={styles.formationIcon} />
              <h3 className={styles.formationTitle}>Management / Développement Personnel</h3>
            </Link>

            <Link to="/formations/grh" className={styles.formationCard}>
              <img src={hr} alt="HR Icon" className={styles.formationIcon} />
              <h3 className={styles.formationTitle}>GRH : Ressources Humaines</h3>
            </Link>

            <Link to="/formations/comptabilite" className={styles.formationCard}>
              <img src={finance} alt="Comptabilité Icon" className={styles.formationIcon} />
              <h3 className={styles.formationTitle}>Comptabilité / Finance / Juridique</h3>
            </Link>

            <Link to="/formations/marketing" className={styles.formationCard}>
              <img src={marketing} alt="Marketing Icon" className={styles.formationIcon} />
              <h3 className={styles.formationTitle}>Commercial / Marketing</h3>
            </Link>

            <Link to="/formations/informatique" className={styles.formationCard}>
              <img src={it} alt="IT Icon" className={styles.formationIcon} />
              <h3 className={styles.formationTitle}>Informatique / Télécommunication</h3>
            </Link>

            <Link to="/formations/qhse" className={styles.formationCard}>
              <img src={qhse} alt="QHSE Icon" className={styles.formationIcon} />
              <h3 className={styles.formationTitle}>QHSE : Qualité, Sécurité, Environnement</h3>
            </Link>

            <Link to="/formations/langues" className={styles.formationCard}>
              <img src={langues} alt="Langues Icon" className={styles.formationIcon} />
              <h3 className={styles.formationTitle}>Langues à des fins spécifiques</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NosFormations;