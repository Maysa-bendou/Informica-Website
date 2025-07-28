import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import styles from './NosReferences.module.css';

// Images
import refo1 from '../../../assets/image/colab/refo1.jpg';
import refo2 from '../../../assets/image/colab/refo2.jpg';
import refo3 from '../../../assets/image/colab/refo3.jpg';
import refo4 from '../../../assets/image/colab/refo4.jpg';
import refo5 from '../../../assets/image/colab/refo5.jpg';
import refo6 from '../../../assets/image/colab/refo6.jpg';
import refo7 from '../../../assets/image/colab/refo7.jpg';
import refo8 from '../../../assets/image/colab/refo8.jpg';
import refo9 from '../../../assets/image/colab/refo9.jpg';
import refo10 from '../../../assets/image/colab/refo10.jpg';
import refo11 from '../../../assets/image/colab/refo11.jpg';
import refo12 from '../../../assets/image/colab/refo12.jpg';
import refo13 from '../../../assets/image/colab/refo13.jpg';
import refo14 from '../../../assets/image/colab/refo14.jpg';
import refo15 from '../../../assets/image/colab/refo15.jpg';
import refo16 from '../../../assets/image/colab/refo16.jpg';
import refo17 from '../../../assets/image/colab/refo17.jpg';
import refo18 from '../../../assets/image/colab/refo18.jpg';
import refo19 from '../../../assets/image/colab/refo19.jpg';
import refo20 from '../../../assets/image/colab/refo20.jpg';
import refo21 from '../../../assets/image/colab/refo21.jpg';
import refo22 from '../../../assets/image/colab/refo22.jpg';
import refo23 from '../../../assets/image/colab/refo23.jpg';
import refo24 from '../../../assets/image/colab/refo24.jpg';
import refo25 from '../../../assets/image/colab/refo25.jpg';
import refo26 from '../../../assets/image/colab/refo26.jpg';
import refo27 from '../../../assets/image/colab/refo27.jpg';
import refo28 from '../../../assets/image/colab/refo28.jpg';
import refo29 from '../../../assets/image/colab/refo29.png';
import refo30 from '../../../assets/image/colab/refo30.png';
import refo31 from '../../../assets/image/colab/refo31.png';
const images = [
  refo1, refo2, refo3, refo4, refo5, refo6, refo7, refo8,
  refo9, refo10, refo11, refo12, refo13, refo14, refo15, refo16,
  refo17, refo18, refo19, refo20, refo21, refo22, refo23, refo24,
  refo25, refo26, refo27, refo28, refo29, refo30, refo31
];

export default function NosReferencesPage() {
  return (
    <>
      <Header page="entreprise" />
      <div className={styles.pageContainer}>
        <section id="Nos_Références" className={styles.sectionReferences}>
          <h2 className={styles.sectionTitleref}>Nos Références</h2>
          <div className={styles.referencesGrid}>
            {images.map((img, index) => (
              <div key={index} className={styles.gridItem}>
                <img src={img} alt={`Référence ${index + 1}`} className={styles.logoImg} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}


