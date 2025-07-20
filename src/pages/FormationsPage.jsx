import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../styles/FormationsPage.module.css';
import logo from '../assets/image/new_logo.png';
import retourIcon from '../assets/image/icons/back2.svg';

export default function FormationsPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [formations, setFormations] = useState({});
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className={styles.loadingSpinner}>Chargement...</div>;

  return (
    <div className={styles.pageFormations}>
      <div className={styles.formationsContainer}>
        <div className={styles.layoutContainer}>
          <div className={styles.leftColumn}>
            <Link to="/entreprise/nos-formations" className={styles.backButton}>
              <img src={retourIcon} alt="Retour" className={styles.retourIcon} />
              
            </Link>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.formationsHeader}>
              <div className={styles.headerLeft}>
                <h1 className={styles.formationsMainTitle}>{category.title}</h1>
              </div>
            </div>

            {/* Formations Content */}
            <div className={styles.formationsRow}>
              <div className={styles.formationsContent}>
                {category.hasSubcategories ? (
                  // If category has subcategories
                  Object.values(formations).map((sub) => (
                    <section key={sub.id} className={styles.formationsCategory}>
                      <h2 className={styles.formationsSubtitle}>{sub.title}</h2>
                      <ul className={styles.formationsList}>
                        {sub.formations.map((f, i) => (
                          <li key={i} className={styles.formationItem}>
                            <Link to={`/formations/${categoryId}/${sub.id}/${i}`} className={styles.formationLink}>
                              <span className={styles.formationNumber}>
                                {String(i + 1).padStart(2, '0')}.
                              </span>
                              <span className={styles.formationText}>{f.titreFormation}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))
                ) : (
                  // If category has no subcategories
                  <section className={styles.formationsCategory}>
                    <ul className={styles.formationsList}>
                      {formations.formations?.length > 0 ? (
                        formations.formations.map((f, i) => (
                          <li key={i} className={styles.formationItem}>
                            <Link to={`/formations/${categoryId}/${i}`} className={styles.formationLink}>
                              <span className={styles.formationNumber}>
                                {String(i + 1).padStart(2, '0')}.
                              </span>
                              <span className={styles.formationText}>{f.titreFormation}</span>
                            </Link>
                          </li>
                        ))
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
    </div>
  );
}