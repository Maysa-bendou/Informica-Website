import React from 'react';
import styles from '../../styles/PageEntreprise.module.css';

function Apropos() {
  return (
    <section id="A_propos" className={styles.sectionApropos}>
      <div className={styles.aproposContainer}>
        <h2 className={styles.aproposTittle}> | EFP INFORMICA</h2>
        <p className={styles.sectionText}>
          Une école de formation professionnelle agréée par l'État, située à Boumerdès et proche de toutes commodités.
          Notre équipe, composée d'environ une centaine de collaborateurs, comprend des experts, consultants formateurs
          hautement qualifiés, anciens cadres du milieu professionnel, enseignants universitaires et autres professionnels
          aguerris. Renforcés par un personnel dynamique et compétent, nous sommes entièrement dévoués à vous offrir un
          service de qualité. Notre principale mission est de vous fournir les formations nécessaires à vos besoins de
          développement professionnel : formations qualifiantes, continues, de recyclage et de sensibilisation, en présentiel
          ou à distance.
        </p>
      </div>
    </section>
  );
}

export default Apropos;
 