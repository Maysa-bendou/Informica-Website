import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FormationDetailsPage() {
  const { categoryId, subcategoryId, formationId } = useParams();
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/index.json')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load categories:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (!categories) return <p>Erreur lors du chargement des catégories.</p>;

  const category = categories[categoryId];
  const subcategory = category?.subcategories?.find(s => s.id === subcategoryId);
  const formation = subcategory?.formations?.find((_, i) => i.toString() === formationId);

  if (!category) return <p>Catégorie non trouvée.</p>;
  if (!subcategory) return <p>Sous-catégorie non trouvée.</p>;
  if (!formation) return <p>Formation non trouvée.</p>;

  return (
    <div>
      <h1>{formation.titreFormation}</h1>
      <p>{formation.description}</p>
      {/* You can render more details if available */}
    </div>
  );
}
