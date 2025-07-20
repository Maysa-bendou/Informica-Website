import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/FormationDetails.module.css';
import retourIcon from '../assets/image/icons/back2.svg';

export default function FormationDetailsPage() {
  const { categoryId, subcategoryId, formationId } = useParams();
  const navigate = useNavigate();

  const [formation, setFormation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Determine the correct path based on whether there's a subcategory
        const filePath = subcategoryId
          ? `/data/formations/${categoryId}/${subcategoryId}.json`
          : `/data/formations/${categoryId}/formations.json`;

        const res = await fetch(filePath);
        
        if (!res.ok) {
          throw new Error(`Fichier introuvable : ${filePath}`);
        }

        const data = await res.json();
        
        // If there's a subcategory, we need to find the specific formation by index
        if (subcategoryId) {
          if (data.formations && data.formations[formationId]) {
            setFormation(data.formations[formationId]);
          } else {
            throw new Error('Formation introuvable dans le fichier JSON');
          }
        } else {
          // For categories without subcategories
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
    <div className={styles.pageContainer}>
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

      <div className={styles.formationDetails}>
        <h1 className={styles.title}>{formation.titreFormation || formation.titre}</h1>

        <h2 className={styles.sectionTitle}>🎯 Objectifs</h2>
        <ul className={styles.list}>
          {(formation.objectifs || []).map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>

        <h2 className={styles.sectionTitle}>👥 Public Cible</h2>
        <p>{formation.publicCible || formation.public_cible}</p>

        <h2 className={styles.sectionTitle}>🧠 Prérequis</h2>
        <p>{formation.prerequis || formation.prérequis}</p>

        <h2 className={styles.sectionTitle}>🗂️ Programme</h2>
        {(formation.programme || []).map((section, i) => (
          <div key={i} className={styles.programSection}>
            <h3>{section.titre}</h3>
            <ul>
              {(section.contenu || []).map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {formation.evaluationFinale && (
          <p className={styles.eval}><strong>✅ Évaluation finale incluse</strong></p>
        )}
      </div>
    </div>
  );
}