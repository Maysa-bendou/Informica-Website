import './styles/App.css';
import Accueil from './pages/Accueil';
import PageEntreprise from './pages/PageEntreprise';
import FormationsPage from './pages/FormationsPage';
import FormationDetailsPage from './pages/FormationDetailsPage';
import PagePublic from './pages/PagePublic';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Accueil />} />

    <Route path="/entreprise" element={<PageEntreprise />} />
        <Route path="/formations/:categoryId" element={<FormationsPage />} />
        <Route path="/formations/:categoryId/:subcategoryId/:formationId" element={<FormationDetailsPage />} />
<Route path="/formations/:categoryId/:formationId" element={<FormationDetailsPage />} />
        <Route path="/public" element={<PagePublic />} />

      </Routes>
    </main>
  );
}

export default App;
