import React from 'react';

function PagePublic() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>En maintenance</h1>
      <p style={styles.subtext}>Contactez-nous</p>
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
  },
  text: {
    fontSize: '2rem',
    marginTop:'230px',
  },
  subtext: {
    fontSize: '1.2rem',
    marginTop: '0.5rem',
  },
};

export default PagePublic;
