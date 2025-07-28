import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//pages
import Accueil from './pages/Accueil/Accueil';
import PagePublic from './pages/PagePublic/PagePublic';
import CataloguePage from './pages/CataloguePage/CataloguePage';
import FormationsPage from './pages/FormationPage/FormationsPage';
import FormationDetailsPage from './pages/FormationDetails/FormationDetailsPage';

// Entreprise sub-pages
import AproposPage from './pages/PageEntreprise/AproposPage/AproposPage';
import ContactPage from './pages/PageEntreprise/ContactPage/ContactPage';
import NosFormationsPage from './pages/PageEntreprise/NosFormationsPage/NosFormationsPage';
import NosReferencesPage from './pages/PageEntreprise/NosReferencesPage/NosReferencesPage';


// ✅ Inline ScrollToTop logic
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// ✅ Also handle scroll to top on full page reload
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
}

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />

      <Routes>
        <Route path="/" element={<Accueil />} />

        {/* Entreprise sub-pages */}
        <Route path="/entreprise/a-propos" element={<AproposPage />} />
        <Route path="/entreprise/nos-formations" element={<NosFormationsPage />} />
        <Route path="/entreprise/nos-references" element={<NosReferencesPage />} />
        <Route path="/entreprise/contact" element={<ContactPage />} />

        {/* Formations */}
        <Route path="/formations/:categoryId" element={<FormationsPage />} />
        <Route path="/formations/:categoryId/:subcategoryId/:formationId" element={<FormationDetailsPage />} />
        <Route path="/formations/:categoryId/:formationId" element={<FormationDetailsPage />} />
        <Route path="/formations/catalogues/:id" element={<CataloguePage />} />

        {/* Public Page */}
        <Route path="/public" element={<PagePublic />} />
      </Routes>
    </>
  );
}

export default App;




