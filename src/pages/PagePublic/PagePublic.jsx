import React from "react";
import { useNavigate } from "react-router-dom";
import retourIcon from '../../assets/image/icons/back-button.png';

function PagePublic() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={styles.container}>
      <button onClick={handleBack} style={styles.backButton}>
        <img src={retourIcon} alt="Retour" style={styles.retourIcon} />
      </button>

      <div style={styles.left}>
        <h1 style={styles.text}>Maintenance en cours</h1>
        <p style={styles.subtext}>
          Pour toutes informations, contactez-nous au :<br />
          <b>Par téléphone :</b> 0561 14 85 63 / 0770 64 03 93<br />
          <b>Par message (Viber, WhatsApp) :</b> 0560 60 68 96
        </p>
      </div>

      <div style={styles.right}>
        {/* ✅ No need to write /public in the src path */}
        <img src="/assets/image/public.svg" alt="Public" style={styles.image} />
      </div>
    </div>
  );
}

// CSS-in-JS styles
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
    position: "relative",
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
    textAlign: "center",
  },
  subtext: {
    fontSize: "clamp(1.2rem, 3.5vw, 1rem)",
    lineHeight: "1.6",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
  },
  backButton: {
    position: "fixed",
    top: "100px",
    left: "1.6rem",
    zIndex: 1000,
    background: "none",
    border: "none",
    cursor: "pointer",
    animation: "slideInFromLeft 0.5s ease-out",
  },
  retourIcon: {
    width: "32px",
    height: "32px",
    transition: "transform 0.3s ease",
  },
};

// Keyframes animation (client-side safe)
if (typeof window !== "undefined") {
  const styleSheet = document.styleSheets[0];
  if (styleSheet) {
    styleSheet.insertRule(`
      @keyframes slideInFromLeft {
        0% {
          opacity: 0;
          transform: translateX(-40px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `, styleSheet.cssRules.length);
  }
}

export default PagePublic;
