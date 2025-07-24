import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/CataloguePage.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const catalogueData = {
  hse: {
    title: 'HSE : Hygiène, Sécurité et Environnement',
    pdf: '/catalogue_pdf/Catalogue de formations HSE.pdf',
  },
  general: {
    title: 'Catalogue général',
    pdf: '/catalogue_pdf/Catalogue de formations M.D.C - V site web.pdf',
  },
  catalogue3: {
    title: 'Catalogue Cyber Security',
    pdf: '/catalogue_pdf/Catalogue F. Cybersécurité 2025.pdf',
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
            <div className={styles.pdfViewerWrapper}>
         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
  <div style={{ height: '100vh', width: '100%', margin: 0, padding: 0 }}>
    <Viewer
      fileUrl={catalogue.pdf}
      defaultScale={1.5} // Optional: enlarge the PDF view
    />
  </div>
</Worker>


            </div>
          ) : (
            <p className={styles.errorMessage}>
              Le catalogue demandé n'existe pas ou n'est pas disponible.
            </p>
          )}
        </div>
      </main>
      
    </div>
  );
}
