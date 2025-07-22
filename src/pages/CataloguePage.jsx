import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/CataloguePage.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const catalogueData = {
  hse: {
    title: 'HSE : Hygiène, Sécurité et Environnement',
    pdf: '/catalogue_pdf/Catalogue de formations HSE.pdf',
  },
  general: {
    title: 'Catalogue général',
    pdf: '/catalogue_pdf/Catalogue de formations M.D.C - V site web.pdf',
  },
};

export default function CataloguePage() {
  const { id } = useParams();
  const catalogue = catalogueData[id];

  return (
    <div>
      <Header page="entreprise" />
      <main className={styles.cataloguePage}>
        <div className={styles.innerContent}>
          

          {catalogue ? (
            <div className={styles.iframeContainer}>
              <iframe
                src={`${catalogue.pdf}#toolbar=0&zoom=100`}
                className={styles.iframe}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p className={styles.errorMessage}>
              Le catalogue demandé n'existe pas ou n'est pas disponible.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
