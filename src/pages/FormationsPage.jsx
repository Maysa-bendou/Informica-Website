import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/formations.css';
import logo from '../assets/image/new_logo.png';  // assuming this is a png file

export default function FormationsPage() {
  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [formationsData, setFormationsData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const indexRes = await fetch('/data/index.json');
        const index = await indexRes.json();

        const category = index[categoryId];
        if (!category) throw new Error('Category not found');

        setCategoryData(category);

        if (category.hasSubcategories) {
          const subcategoryPromises = category.subcategories.map(async (sub) => {
            const subRes = await fetch(`/data/formations/${categoryId}/${sub.id}.json`);
            const subData = await subRes.json();
            return { id: sub.id, title: sub.title, formations: subData.formations };
          });

          const results = await Promise.all(subcategoryPromises);
          const data = {};
          results.forEach(sub => {
            data[sub.id] = sub;
          });
          setFormationsData(data);
        } else {
          const res = await fetch(`/data/formations/${categoryId}/formations.json`);
          const data = await res.json();
          setFormationsData({ formations: data.formations });
        }

        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    }

    fetchData();
  }, [categoryId]);

  if (loading) return <div className="loading-spinner">Chargement...</div>;

  return (
  <div className="page-formations">
    <div className="formations-container">
      <div className="formations-header">
        <div className="header-left">
          <img src={logo} alt="Category Logo" className="category-icon" />
          <h1 className="formations-main-title">{categoryData.title}</h1>
        </div>
        <Link to="/entreprise#NosFormations" className="retour-button">← Retour</Link>
      </div>

      <div className="formations-row">
        <div className="formations-content">
          {categoryData.hasSubcategories ? (
            Object.values(formationsData).map(sub => (
              <section key={sub.id} className="formations-category">
                <h2 className="formations-subtitle">{sub.title}</h2>
                <ul className="formations-list">
                  {sub.formations.map((f, i) => (
                    <li key={i} className="formation-item">
                      <Link 
                        to={`/formations/${categoryId}/${sub.id}/${i}`} 
                        className="formation-link"
                      >
                        <span className="formation-number">{String(i + 1).padStart(2, '0')}.</span>
                        <span className="formation-text">{f.titreFormation}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          ) : (
            <ul className="formations-list">
              {formationsData.formations.map((f, i) => (
                <li key={i} className="formation-item">
                  <Link 
                    to={`/formations/${categoryId}/${i}`} 
                    className="formation-link"
                  >
                    <span className="formation-number">{String(i + 1).padStart(2, '0')}.</span>
                    <span className="formation-text">{f.titreFormation}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  </div>
);

}
