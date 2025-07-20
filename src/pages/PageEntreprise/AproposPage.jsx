import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import aproposStyles from '../../styles/Apropos.module.css';
import contactStyles from '../../styles/Contact.module.css';
import referencesStyles from '../../styles/NosReferences.module.css';
import formationsStyles from '../../styles/NosFormations.module.css';



export default function AproposPage() {
  return (
    <div className={aproposStyles.container}>
      <Header page="entreprise" />
      
      <main className={aproposStyles.sectionApropos}>
        <div className={aproposStyles.aproposPage}>    
          <div className={aproposStyles.aproposContainer}>
            <h2 className={aproposStyles.aproposTittle}>EFP INFORMICA</h2>
            <p className={aproposStyles.sectionText}>
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
