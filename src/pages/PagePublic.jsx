import React from 'react';

function PagePublic() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Maintenance en cours</h1>
      <p style={styles.subtext}>
        Pour toutes informations, contactez-nous au :<br />
        <b>Par téléphone :</b> 0561 14 85 63 / 0770 64 03 93<br />
        <b>Par message (Viber, WhatsApp) :</b> 0560 60 68 96
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: '93vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: '0 20px',
  },
  text: {
    fontSize: 'clamp(1rem, 4.5vw, 2.5rem)', // 👈 Responsive font size
    marginBottom: '1rem',
  },
  subtext: {
    fontSize: 'clamp(1rem, 3vw, 1rem)', // 👈 Responsive font size
    lineHeight: '1.6',
  },
};

export default PagePublic;

