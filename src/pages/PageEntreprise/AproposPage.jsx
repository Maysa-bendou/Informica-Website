import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import aproposStyles from '../../styles/Apropos.module.css';

export default function AproposPage() {
  return (
    <div className={aproposStyles.container}>
      <Header page="entreprise" />
      <main className={aproposStyles.aproposPage}>
<div className={`${aproposStyles.leftContent} ${aproposStyles.animateLeft}`}>
  <h2 className={aproposStyles.aproposTittle}>EFP INFORMICA</h2>

  
  <p className={aproposStyles.sectionText}>
    Une école de formation professionnelle agréée par l'État, située à Boumerdès et proche de toutes commodités.
    <strong>Notre Équipe</strong> , composée d'environ une centaine de collaborateurs, comprend des experts, consultants formateurs
    hautement qualifiés, anciens cadres du milieu professionnel, enseignants universitaires et autres professionnels
    aguerris.

  
    Renforcés par un personnel dynamique et compétent, nous sommes entièrement dévoués à vous offrir un
    service de qualité. <strong>Notre Principale Mission</strong> : Vous fournir les formations nécessaires à vos besoins de
    développement professionnel : formations qualifiantes, continues, de recyclage et de sensibilisation, en présentiel
    ou à distance.
  </p>
</div>

<div className={`${aproposStyles.rightImageWrapper} ${aproposStyles.animateRight}`}>
  <img 
    src="/assets/image/testapropos.svg" 
    alt="EFP INFORMICA" 
    className={aproposStyles.rightImage}
  />
</div>

      </main>
      <Footer />
    </div>
  );
}

