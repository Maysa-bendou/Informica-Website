import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';


import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/FormationDetails.module.css';
import retourIcon from '../assets/image/icons/back-button.png';

export default function FormationDetailsPage() {
  const { categoryId, subcategoryId, formationId } = useParams();
  const navigate = useNavigate();

  const [formation, setFormation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const filePath = subcategoryId
          ? `/data/formations/${categoryId}/${subcategoryId}.json`
          : `/data/formations/${categoryId}/formations.json`;

        const res = await fetch(filePath);
        if (!res.ok) {
          throw new Error(`Fichier introuvable : ${filePath}`);
        }

        const data = await res.json();

        if (subcategoryId) {
          if (data.formations && data.formations[formationId]) {
            setFormation(data.formations[formationId]);
          } else {
            throw new Error('Formation introuvable dans le fichier JSON');
          }
        } else {
          if (data.formations && data.formations[formationId]) {
            setFormation(data.formations[formationId]);
          } else {
            throw new Error('Formation introuvable dans le fichier JSON');
          }
        }
      } catch (err) {
        console.error('Erreur lors du chargement de la formation :', err);
        setFormation(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [categoryId, subcategoryId, formationId]);

  if (loading) return <p className={styles.loading}>Chargement des données...</p>;

  if (!formation) {
    return <p className={styles.noImages}>Aucune donnée de formation trouvée.</p>;
  }

  return (
  <div className={styles.pageWrapper}>
   <Header page="entreprise" />
   <main className={styles.sectionFormations}>
    <div className={styles.pageContainer}>
     <div className={styles.formationDetaills}>
<button
  onClick={() => {
    if (categoryId === 'catalogues') {
      navigate('/entreprise#Nos_formations');
    } else {
      navigate(-1);
    }
  }}
  className={styles.backButton}
>
  <img src={retourIcon} alt="Retour" className={styles.retourIcon} />
</button>

     </div>
      <div className={styles.formationDetails}>
        <h1 className={styles.title}>
          FICHE TECHNIQUE DE FORMATION :
        </h1>
        <h2 className={styles.subTitlle}>
          {formation.titreFormation?.replace('Fiche Technique de Formation :', '').trim() || formation.titre}
        </h2>


        <h2 className={styles.sectionTitle}>Objectifs de la Formation</h2>
        <ul className={styles.list}>
          {(formation.objectifs || []).map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>

        <h2 className={styles.sectionTitle}>Public Cible</h2>
        <p>{formation.publicCible || formation.public_cible}</p>

        <h2 className={styles.sectionTitle}>Prérequis</h2>
        {Array.isArray(formation.prerequis || formation.prérequis) ? (
          <ul className={styles.list}>
            {(formation.prerequis || formation.prérequis || []).map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        ) : (
          <p>{formation.prerequis || formation.prérequis}</p>
        )}

        <h2 className={styles.sectionTitle}>Programme de la formation</h2>
        {(formation.programme || []).map((section, i) => (
          <div key={i} className={styles.programSection}>
            <h3>{section.titre}</h3>

            {/* Case 1: Flat list of strings */}
            {Array.isArray(section.contenu) && typeof section.contenu[0] === 'string' && (
              <ul>
                {section.contenu.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}

            {/* Case 2: Nested sousTitre/details structure */}
            {Array.isArray(section.contenu) && typeof section.contenu[0] === 'object' && (
              <div>
                {section.contenu.map((sousSection, k) => (
                  <div key={k} className={styles.subSection}>
                    <h4 className={styles.subTitle}>{sousSection.sousTitre}</h4>
                    <ul>
                      {(sousSection.details || []).map((detail, l) => (
                        <li key={l}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {formation.evaluationFinale && (
          <p className={styles.eval}><strong>✅ Évaluation finale incluse</strong></p>
        )}
      </div>
    </div>
   </main>
   <Footer />
  </div>
  );
}