import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import formationsStyles from '../../styles/NosFormations.module.css'; 
import management from '../../assets/image/icons/newicon/formation1noire.png';

import hr from '../../assets/image/icons/newicon/formation2noire.png';

import finance from '../../assets/image/icons/newicon/formation3noire.png';

import marketing from '../../assets/image/icons/newicon/formation4noire.png';

import it from '../../assets/image/icons/newicon/formation5bleu.png';

import qhse from '../../assets/image/icons/newicon/formation6bleu.png';

import langues from '../../assets/image/icons/newicon/formation7bleu.png';

import catalogueIcon from '../../assets/image/icons/catalog2.svg';


export default function NosFormationsPage() {
  return (
    <div className={formationsStyles.container}>
      <Header page="entreprise" />

      <main className={formationsStyles.sectionFormations}>
        <div className={formationsStyles.overlay}></div>
        <div className={formationsStyles.horizontalContainer}>

          {/* Left Section */}
          <div className={formationsStyles.leftSection}>
            <h2 className={formationsStyles.formationsSubtitle}>
              Formations Par Domaine
            </h2>
            <h3 className={formationsStyles.formationsSubtitle0}> Fiches techniques standard, modulables selon les besoins de votre entreprise</h3>
            <div className={formationsStyles.formationsGrid}>
              <Link to="/formations/management" className={formationsStyles.formationCard}>
                <img src={management} alt="Management Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>Management / Développement Personnel</h3>
              </Link>

              <Link to="/formations/grh" className={formationsStyles.formationCard}>
                <img src={hr} alt="HR Icon"  className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>GRH : Ressources Humaines</h3>
              </Link>

              <Link to="/formations/comptabilite" className={formationsStyles.formationCard}>
                <img src={finance} alt="Comptabilité Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>Comptabilité / Finance / Juridique</h3>
              </Link>

              <Link to="/formations/marketing" className={formationsStyles.formationCard}>
                <img src={marketing} alt="Marketing Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>Commercial / Marketing</h3>
              </Link>

              <Link to="/formations/informatique" className={formationsStyles.formationCard}>
                <img src={it} alt="IT Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>Informatique / Télécommunication</h3>
              </Link>

              <Link to="/formations/qhse" className={formationsStyles.formationCard}>
                <img src={qhse} alt="QHSE Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>QHSE : Qualité, Sécurité, Environnement</h3>
              </Link>

              <div className={formationsStyles.singleCardWrapper}>
                <Link to="/formations/langues" className={formationsStyles.formationCard}>
                  <img src={langues} alt="Langues Icon" className={formationsStyles.formationIcon} />
                  <h3 className={formationsStyles.formationTitle}>Langues à des fins spécifiques</h3>
                </Link>
              </div>
            </div>
          </div>


          
          <div className={formationsStyles.verticalSeparator}></div>



          {/* Right Section */}
          <div className={formationsStyles.rightSection}>
            <h2 className={formationsStyles.formationsSubtitle1}>
              Savoir-faire de nos formateurs à travers nos catalogues
            </h2>
            <div className={formationsStyles.formationsGridd}>

              <Link to="/formations/catalogues/general" className={formationsStyles.formationCardd}>
                <img src={catalogueIcon} alt="Catalogue Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>
                  -Management & Leadership.<br />
                  -Développement Personnel et Professionnel.<br />
                  -Gestion Commerciale & Relation Client.
                </h3>
              </Link>

              <Link to="/formations/catalogues/hse" className={formationsStyles.formationCardd}>
                <img src={catalogueIcon} alt="Catalogue Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>
                  HSE : Hygiène, Sécurité et Environnement
                </h3>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}