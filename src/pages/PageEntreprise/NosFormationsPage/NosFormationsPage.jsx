import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import formationsStyles from './NosFormations.module.css';

import management from '../../../assets/image/icons/newicon/formation1bleu.png';
import hr from '../../../assets/image/icons/newicon/formation2bleu.png';
import finance from '../../../assets/image/icons/newicon/bank-report.png';
import marketing from '../../../assets/image/icons/newicon/growth.png';
import it from '../../../assets/image/icons/newicon/formation5bleu.png';
import qhse from '../../../assets/image/icons/newicon/formation6bleu.png';
import langues from '../../../assets/image/icons/newicon/formation7bleu.png';
import catalogueIcon from '../../../assets/image/icons/iconbleucatalogue.svg';

export default function NosFormationsPage() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
  const last = localStorage.getItem('lastFormationCategory');
  if (last) setActiveCard(last);

  const handleClickOutside = (e) => {
    // If clicked element doesn't match any of the card classes
    if (!e.target.closest(`.${formationsStyles.formationCard}`) && 
        !e.target.closest(`.${formationsStyles.formationCardd}`)) {
      setActiveCard(null);
      localStorage.removeItem('lastFormationCategory');
    }
  };
  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, []);

  const handleClick = (category) => {
    localStorage.setItem('lastFormationCategory', category);
    setActiveCard(category);
  };

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
            <h3 className={formationsStyles.formationsSubtitle0}>
              Fiches techniques standard, modulables selon les besoins de votre entreprise
            </h3>
            <div className={formationsStyles.formationsGrid}>
              <Link 
                to="/formations/management" 
                onClick={() => handleClick('management')}
                className={`${formationsStyles.formationCard} ${activeCard === 'management' ? formationsStyles.activeCard : ''}`}
              >
                <img src={management} alt="Management Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>Management / Développement Personnel</h3>
              </Link>

              <Link 
                to="/formations/grh" 
                onClick={() => handleClick('grh')}
                className={`${formationsStyles.formationCard} ${activeCard === 'grh' ? formationsStyles.activeCard : ''}`}
              >
                <img src={hr} alt="HR Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>GRH : Ressources Humaines</h3>
              </Link>

              <Link 
                to="/formations/comptabilite" 
                onClick={() => handleClick('comptabilite')}
                className={`${formationsStyles.formationCard} ${activeCard === 'comptabilite' ? formationsStyles.activeCard : ''}`}
              >
                <img src={finance} alt="Comptabilité Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>Comptabilité / Finance / Juridique</h3>
              </Link>

              <Link 
                to="/formations/marketing" 
                onClick={() => handleClick('marketing')}
                className={`${formationsStyles.formationCard} ${activeCard === 'marketing' ? formationsStyles.activeCard : ''}`}
              >
                <img src={marketing} alt="Marketing Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>Commercial / Marketing</h3>
              </Link>

              <Link 
                to="/formations/informatique" 
                onClick={() => handleClick('informatique')}
                className={`${formationsStyles.formationCard} ${activeCard === 'informatique' ? formationsStyles.activeCard : ''}`}
              >
                <img src={it} alt="IT Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>Informatique / Télécommunication</h3>
              </Link>

              <Link 
                to="/formations/qhse" 
                onClick={() => handleClick('qhse')}
                className={`${formationsStyles.formationCard} ${activeCard === 'qhse' ? formationsStyles.activeCard : ''}`}
              >
                <img src={qhse} alt="QHSE Icon" className={formationsStyles.formationIcon} />
                <h3 className={formationsStyles.formationTitle}>QHSE : Qualité, Sécurité, Environnement</h3>
              </Link>

              <div className={formationsStyles.singleCardWrapper}>
                <Link 
                  to="/formations/langues" 
                  onClick={() => handleClick('langues')}
                  className={`${formationsStyles.formationCard} ${activeCard === 'langues' ? formationsStyles.activeCard : ''}`}
                >
                  <img src={langues} alt="Langues Icon" className={formationsStyles.formationIcon} />
                  <h3 className={formationsStyles.formationTitle}>Langues à des fins spécifiques</h3>
                </Link>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className={formationsStyles.verticalSeparator}></div>

          {/* Right Section */}
          <div className={formationsStyles.rightSection}>
            <h2 className={formationsStyles.formationsSubtitle1}>
              Savoir-faire de nos formateurs à travers nos catalogues
            </h2>
            <div className={formationsStyles.formationsGridd}>
              <Link 
                to="/formations/catalogues/general" 
                onClick={() => handleClick('catalogue-general')}
                className={`${formationsStyles.formationCardd} ${activeCard === 'catalogue-general' ? formationsStyles.activeCard : ''}`}
              >
                <img src={catalogueIcon} alt="Catalogue Icon" className={formationsStyles.formationIcon2} />
                <h3 className={formationsStyles.formationTitle1}>
                  -Management & Leadership.<br />
                  -Développement Personnel et Professionnel.<br />
                  -Gestion Commerciale & Relation Client.
                </h3>
              </Link>

              <Link 
                to="/formations/catalogues/catalogue3" 
                onClick={() => handleClick('catalogue3')}
                className={`${formationsStyles.formationCardd} ${activeCard === 'catalogue3' ? formationsStyles.activeCard : ''}`}
              >
                <img src={catalogueIcon} alt="Catalogue Icon" className={formationsStyles.formationIcon2} />
                <h3 className={formationsStyles.formationTitle1}>
                  Catalogue de Formation Cyber Sécurité
                </h3>
              </Link>

              <Link 
                to="/formations/catalogues/hse" 
                onClick={() => handleClick('hse')}
                className={`${formationsStyles.formationCardd} ${activeCard === 'hse' ? formationsStyles.activeCard : ''}`}
              >
                <img src={catalogueIcon} alt="Catalogue Icon" className={formationsStyles.formationIcon2} />
                <h3 className={formationsStyles.formationTitle1}>
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
