import React from "react";

function PagePublic() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h1 style={styles.text}>Maintenance en cours</h1>
        <p style={styles.subtext}>
          Pour toutes informations, contactez-nous au :<br />
          <b>Par téléphone :</b> 0561 14 85 63 / 0770 64 03 93<br />
          <b>Par message (Viber, WhatsApp) :</b> 0560 60 68 96
        </p>
      </div>

      <div style={styles.right}>
        <img src="/public.svg" alt="Public" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px",
    textAlign: "left",
    backgroundColor: "#fff",
    gap: "20px",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
    maxWidth: "600px",
     marginLeft: "50px", 
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: "90%",
    height: "auto",
  },
  text: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "1.5rem",
    textAlign:"center",
  },
  subtext: {
    fontSize: "clamp(1.2rem, 3.5vw, 1rem)",
    lineHeight: "1.6",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "8px",
    textAlign:"center",
  },
};

export default PagePublic;




