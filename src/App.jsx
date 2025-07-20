// src/App.jsx
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

// ✅ Force scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Disable browser scroll restore
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 🚨 Set scroll instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // ✅ FORCE no animation
    });
  }, [pathname]);

  return null;
}

// ✅ Also scroll to top on hard reload
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto' // again, make it instant
  });
}

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/entreprise/a-propos" element={<AproposPage />} />
        <Route path="/entreprise/nos-formations" element={<NosFormationsPage />} />
        <Route path="/entreprise/nos-references" element={<NosReferencesPage />} />
        <Route path="/entreprise/contact" element={<ContactPage />} />
        <Route path="/formations/:categoryId" element={<FormationsPage />} />
        <Route path="/formations/:categoryId/:subcategoryId/:formationId" element={<FormationDetailsPage />} />
        <Route path="/formations/:categoryId/:formationId" element={<FormationDetailsPage />} />
        <Route path="/public" element={<PagePublic />} />
      </Routes>
    </>
  );
}

export default App;






