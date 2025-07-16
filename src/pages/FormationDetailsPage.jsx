import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FormationDetailsPage() {
  const { categoryId, subcategoryId, formationId } = useParams();
  const [formation, setFormation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = subcategoryId
      ? `/data/formations/${categoryId}/${subcategoryId}.json`
      : `/data/formations/${categoryId}/formations.json`;

    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        const targetFormation = data.formations[parseInt(formationId)];
        setFormation(targetFormation);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erreur de chargement :', err);
        setLoading(false);
      });
  }, [categoryId, subcategoryId, formationId]);

  if (loading) return <p>Chargement...</p>;
  if (!formation || !formation.image) return <p>Image introuvable.</p>;

  return (
    <div className="formation-image-wrapper">
      <img
        src={formation.image}
        alt={formation.titreFormation || 'Formation'}
        className="formation-image"
      />
    </div>
  );
}
