import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../styles/FormationsPage.module.css';
import logo from '../assets/image/new_logo.png';
import retourIcon from '../assets/image/icons/back-button.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FormationsPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [formations, setFormations] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeFormationKey, setActiveFormationKey] = useState(null);

  // Load formations when categoryId changes
  useEffect(() => {
    async function loadFormations() {
      try {
        const indexRes = await fetch('/data/index.json');
        const indexData = await indexRes.json();

        const selectedCategory = indexData[categoryId];
        if (!selectedCategory) throw new Error('Catégorie introuvable');

        setCategory(selectedCategory);

        if (selectedCategory.hasSubcategories) {
          const subcategories = await Promise.all(
            selectedCategory.subcategories.map(async (sub) => {
              const res = await fetch(`/data/formations/${categoryId}/${sub.id}.json`);
              const data = await res.json();
              return { ...sub, formations: data.formations };
            })
          );

          const structuredData = {};
          subcategories.forEach((sub) => {
            structuredData[sub.id] = sub;
          });
          setFormations(structuredData);
        } else {
          const res = await fetch(`/data/formations/${categoryId}/formations.json`);
          const data = await res.json();
          setFormations({ formations: data.formations });
        }

        setLoading(false);
      } catch (err) {
        console.error('Erreur lors du chargement des données:', err);
      }
    }

    loadFormations();
  }, [categoryId]);

  // Restore active card & listen for outside clicks
  useEffect(() => {
    const stored = localStorage.getItem('activeFormationKey');
    if (stored) setActiveFormationKey(stored);

    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles.formationLink}`)) {
        setActiveFormationKey(null);
        localStorage.removeItem('activeFormationKey');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  if (loading) return <div className={styles.loadingSpinner}>Chargement...</div>;

  return (
    <div className={styles.pageFormations}>
      <Header page="entreprise" />
      <div className={styles.formationsContainer}>
        <div className={styles.layoutContainer}>
          
          <div className={styles.rightColumn}>
<div className={styles.formationsHeader}>
  <Link to="/entreprise/nos-formations" className={styles.backButton}>
    <img src={retourIcon} alt="Retour" className={styles.retourIcon} />
  </Link>
  <h1 className={styles.formationsMainTitle}>{category.title}</h1>
</div>


            {/* Formations Content */}
            <div className={styles.formationsRow}>
              <div className={styles.formationsContent}>
                {category.hasSubcategories ? (
                  Object.values(formations).map((sub) => (
                    <section key={sub.id} className={styles.formationsCategory}>
                      <h2 className={styles.formationsSubtitle}>{sub.title}</h2>
                      <ul className={styles.formationsList}>
                        {sub.formations.map((f, i) => {
                          const key = `${categoryId}/${sub.id}/${i}`;
                          return (
                            <li key={i} className={styles.formationItem}>
                              <Link 
                                to={`/formations/${categoryId}/${sub.id}/${i}`}
                                onClick={() => {
                                  localStorage.setItem('activeFormationKey', key);
                                  setActiveFormationKey(key);
                                }}
                                className={`${styles.formationLink} ${activeFormationKey === key ? styles.activeFormation : ''}`}
                              >
                                <span className={styles.formationNumber}>
                                  {String(i + 1).padStart(2, '0')}.
                                </span>
                                <span className={styles.formationText}>{f.titreFormation}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  ))
                ) : (
                  <section className={styles.formationsCategory}>
                    <ul className={styles.formationsList}>
                      {formations.formations?.length > 0 ? (
                        formations.formations.map((f, i) => {
                          const key = `${categoryId}/${i}`;
                          return (
                            <li key={i} className={styles.formationItem}>
                              <Link 
                                to={`/formations/${categoryId}/${i}`}
                                onClick={() => {
                                  localStorage.setItem('activeFormationKey', key);
                                  setActiveFormationKey(key);
                                }}
                                className={`${styles.formationLink} ${activeFormationKey === key ? styles.activeFormation : ''}`}
                              >
                                <span className={styles.formationNumber}>
                                  {String(i + 1).padStart(2, '0')}.
                                </span>
                                <span className={styles.formationText}>{f.titreFormation}</span>
                              </Link>
                            </li>
                          );
                        })
                      ) : (
                        <p>Aucune formation disponible.</p>
                      )}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
