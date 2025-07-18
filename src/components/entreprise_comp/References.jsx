import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/PageEntreprise.module.css';

// Images for references
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

// Arrow icons
import leftArrow from '../../assets/image/icons/before.svg';
import rightArrow from '../../assets/image/icons/next.svg';

const images = [rrrr1, rrrr2, rrrr3, rrr4, rrr5, rrr6, fef21, fef22, fef23, fef24];

function NosReferences() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(null);
  const [pauseTimer, setPauseTimer] = useState(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : prev));
    }, 3000);
    setAutoSlide(slideInterval);
  };

  const stopAutoSlide = () => {
    if (autoSlide) clearInterval(autoSlide);
    if (pauseTimer) clearTimeout(pauseTimer);
  };

  const pauseThenResume = () => {
    stopAutoSlide();
    const timer = setTimeout(() => {
      startAutoSlide();
    }, 10000);
    setPauseTimer(timer);
  };

  const next = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
      pauseThenResume();
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      pauseThenResume();
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  return (
    <section id="Nos_Références" className={styles.sectionReferences}>
      <h2 className={styles.sectionTitleref}>Nos Références</h2>

      <div className={styles.referencesSliderContainer}>
        {current > 0 && (
          <button className={`${styles.sliderArrow} ${styles.prevArrow}`} onClick={prev}>
            <img src={leftArrow} alt="Previous" className={styles.arrowIcon}/>
          </button>
        )}

        <div
          className={styles.referencesSlider}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div className={styles.sliderTrack} ref={trackRef}>
            {images.map((img, i) => (
              <div key={i} className={styles.slide}>
                <img src={img} alt={`Référence ${i + 1}`} className={styles.slideImg} />
              </div>
            ))}
          </div>
        </div>

        {current < images.length - 1 && (
          <button className={`${styles.sliderArrow} ${styles.nextArrow}`} onClick={next}>
            <img src={rightArrow} alt="Next" className={styles.arrowIcon}/>
          </button>
        )}
      </div>

      <div className={styles.sliderDots}>
        {images.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => {
              setCurrent(i);
              pauseThenResume();
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default NosReferences;
