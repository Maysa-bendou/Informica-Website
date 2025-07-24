import React, { useRef, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import aproposStyles from '../../styles/Apropos.module.css';

export default function AproposPage() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(aproposStyles['in-view']);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div className={aproposStyles.container}>
      <Header page="entreprise" />
      <main className={aproposStyles.aproposPage}>
        <div ref={wrapperRef} className={aproposStyles.contentWrapper}>
          <div className={aproposStyles.leftContent}>
            <h2 className={aproposStyles.aproposTittle}>EFP INFORMICA</h2>
            
            <p className={aproposStyles.sectionText}>
              Une école de formation professionnelle agréée par l'État, située à Boumerdès et proche de toutes commodités.
              <strong>Notre Équipe</strong>, composée d'environ une centaine de collaborateurs, comprend des experts, consultants formateurs
              hautement qualifiés, anciens cadres du milieu professionnel, enseignants universitaires et autres professionnels
              aguerris.

              Renforcés par un personnel dynamique et compétent, nous sommes entièrement dévoués à vous offrir un
              service de qualité. <strong>Notre Principale Mission</strong> : Vous fournir les formations nécessaires à vos besoins de
              développement professionnel : formations qualifiantes, continues, de recyclage et de sensibilisation, en présentiel
              ou à distance.
            </p>
          </div>

          <div className={aproposStyles.rightImageContainer}>
            <div className={aproposStyles.imageWrapper}>
              <img 
                src="/assets/image/apropostestimage2.jpg" 
                alt="EFP INFORMICA" 
                className={aproposStyles.rightImage}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}