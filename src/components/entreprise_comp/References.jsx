import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/PageEntreprise.module.css';
import rrrr1 from '../../assets/image/colab/rrrr1.png';
import rrrr2 from '../../assets/image/colab/rrrr2.png';
import rrrr3 from '../../assets/image/colab/rrrr3.png';
import rrr4 from '../../assets/image/colab/rrr4.png';
import rrr5 from '../../assets/image/colab/rrr5.png';
import rrr6 from '../../assets/image/colab/rrr6.png';
import fef21 from '../../assets/image/colab/fef2_1.png';
import fef22 from '../../assets/image/colab/fef2_2.png';
import fef23 from '../../assets/image/colab/fef2_3.png';
import fef24 from '../../assets/image/colab/fef2_4.png';

const images = [rrrr1, rrrr2, rrrr3, rrr4, rrr5, rrr6, fef21, fef22, fef23, fef24];

function NosReferences() {
  const trackRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, images.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <section id="Nos_Références" className={styles.sectionReferences}>
      <h2 className={styles.sectionTitle}>Nos Références</h2>

      <div className={styles.referencesSliderContainer}>
        <button
          className={`${styles.sliderArrow} ${styles.prevArrow} ${currentSlide === 0 ? styles.hidden : ''}`}
          onClick={prevSlide}
        >
          &#8249;
        </button>

        <div className={styles.referencesSlider}>
          <div className={styles.sliderTrack} ref={trackRef}>
            {images.map((img, index) => (
              <div className={styles.slide} key={index}>
                <img src={img} alt={`Partner ${index + 1}`} className={styles.slideImg} />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.sliderArrow} ${styles.nextArrow} ${currentSlide === images.length - 1 ? styles.hidden : ''}`}
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default NosReferences;
