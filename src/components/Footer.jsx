import { Link } from 'react-router-dom';

function Footer() {
  const footerStyles = {
    footer: {
      backgroundColor: '#001b4c',
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
      width: '100%',
      marginTop: '0'
    },
    footerRow: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    footerLinks: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 10px',
      marginBottom: '30px'
    },
    footerLinksH4: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '18px',
      fontWeight: '400',
      letterSpacing: '2px',
      marginBottom: '15px',
      color: '#ffd700',
      textTransform: 'uppercase'
    },
    footerNav: {
      display: 'flex',
      gap: '30px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    footerLink: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: '300',
      fontSize: '16px',
      color: 'white',
      textDecoration: 'none',
      padding: '5px 0',
      transition: 'color 0.3s ease',
      letterSpacing: '0.5px'
    },
    footerBottom: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: '300',
      fontSize: '14px',
      color: 'white',
      letterSpacing: '1px',
      paddingTop: '20px',
      marginTop: '20px',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%'
    }
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.footerRow}>
        <div style={footerStyles.footerLinks}>
          <h4 style={footerStyles.footerLinksH4}>Liens rapides</h4>
          <nav style={footerStyles.footerNav}>
            <Link to="/" style={footerStyles.footerLink}>Accueil</Link>
            <Link to="/public" style={footerStyles.footerLink}>Grand Public</Link>
            <Link to="/entreprise/a-propos" style={footerStyles.footerLink}>Entreprise</Link>
          </nav>
        </div>
      </div>
      <div style={footerStyles.footerBottom}>
        © 2025 INFORMICA. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;