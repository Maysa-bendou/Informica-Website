import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Accueil from './pages/Accueil';
import FormationsPage from './pages/FormationsPage';
import FormationDetailsPage from './pages/FormationDetailsPage';
import PagePublic from './pages/PagePublic';

import AproposPage from './pages/PageEntreprise/AproposPage';
import NosFormationsPage from './pages/PageEntreprise/NosFormationsPage';
import NosReferencesPage from './pages/PageEntreprise/NosReferencesPage';
import ContactPage from './pages/PageEntreprise/ContactPage';

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

        {/* Public Page */}
        <Route path="/public" element={<PagePublic />} />
      </Routes>
    </>
  );
}

export default App;




