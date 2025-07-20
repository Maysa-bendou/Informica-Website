import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/PageEntreprise.module.css';

export default function AproposPage() {
  return (
    <div className={styles.container}>
      <Header page="entreprise" />
      
      <main className={styles.sectionApropos}>
        <div className={styles.aproposPage}>    
          <div className={styles.aproposContainer}>
            <h2 className={styles.aproposTittle}>EFP INFORMICA</h2>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}