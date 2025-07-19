import React, { useEffect, useState } from 'react';
import Apropos from './Entreprise/Apropos';  
import NosFormations from './Entreprise/NosFormations';
import NosReferences from './Entreprise/References';
import Contact from './Entreprise/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/PageEntreprise.module.css';


const sections = ['A_propos', 'Nos_formations', 'Nos_Références', 'Contact'];

function PageEntreprise() {
  const [activeSection, setActiveSection] = useState('A_propos');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = decodeURIComponent(window.location.hash.replace('#', ''));
      if (sections.includes(hash)) {
        setActiveSection(hash);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className={styles.container}>
      <Header page="entreprise" activeSection={activeSection} />
      
      <main className={styles.mainContent}>
        {activeSection === 'A_propos' && (
          <section id="A_propos" className={styles.sectionApropos}>
            <Apropos />
          </section>
        )}
        
        {activeSection === 'Nos_formations' && (
          <section id="Nos_formations" className={styles.sectionFormations}>
            <NosFormations />
          </section>
        )}
        
        {activeSection === 'Nos_Références' && (
          <section id="Nos_Références" className={styles.sectionReferences}>
            <NosReferences />
          </section>
        )}
        
        {activeSection === 'Contact' && (
          <section id="Contact" className={styles.sectionContact}>
            <Contact />
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default PageEntreprise;