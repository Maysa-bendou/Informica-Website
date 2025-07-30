import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      const currentTitle = document.title;
      document.title = '';
      document.title = currentTitle;
    });

    if (pathname === '/') {
      document.title = 'Accueil - Informica';
    } else if (pathname === '/public') {
      document.title = 'Grand Public - Informica';
    } else if (pathname === '/entreprise/a-propos') {
      document.title = 'À Propos - Informica';
    } else if (pathname === '/entreprise/nos-formations') {
      document.title = 'Nos Formations - Informica';
    } else if (pathname === '/entreprise/nos-references') {
      document.title = 'Nos Références - Informica';
    } else if (pathname === '/entreprise/contact') {
      document.title = 'Contact - Informica';
    } else if (matchPath('/formations/:categoryId/:subcategoryId/:formationId', pathname)) {
      document.title = 'Détail Formation - Informica';
    } else if (matchPath('/formations/:categoryId/:formationId', pathname)) {
      document.title = 'Détail Formation - Informica';
    } else if (matchPath('/formations/:categoryId', pathname)) {
      document.title = 'Formations - Informica';
    } else if (matchPath('/formations/catalogues/:id', pathname)) {
      document.title = 'Catalogue - Informica';
    } else {
      document.title = 'Informica';
    }

  }, [pathname]);

  return null;
}
