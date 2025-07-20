import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/FormationDetails.module.css';
import retourIcon from '../assets/image/icons/back2.svg';

export default function FormationDetailsPage() {
  const { categoryId, subcategoryId, formationId } = useParams();
  const navigate = useNavigate();

  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        if (categoryId === 'catalogues') {
          const res = await fetch('/data/index.json');
          const data = await res.json();
         const item = data.catalogue.items.find(i => i.id === formationId);

          setPdfUrl(item?.pdf || null);
        } else {
          const filePath = subcategoryId
            ? `/data/formations/${categoryId}/${subcategoryId}.json`
            : `/data/formations/${categoryId}/formations.json`;

          const res = await fetch(filePath);
          const data = await res.json();
          const formation = data.formations[parseInt(formationId)];
          setPdfUrl(formation?.pdf || null);
        }
      } catch (err) {
        console.error('Erreur lors du chargement du PDF :', err);
        setPdfUrl(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [categoryId, subcategoryId, formationId]);

  if (loading) return <p className={styles.loading}>Chargement du PDF...</p>;

  if (!pdfUrl) {
    return <p className={styles.noImages}>Aucun PDF disponible.</p>;
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


      <div className={styles.pdfWrapper}>
        <iframe
          src={pdfUrl + '#toolbar=0'}
          title="PDF Formation"
        />
      </div>
    </div>
  );
}
