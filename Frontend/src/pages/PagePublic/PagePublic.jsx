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

      <div style={styles.content}>
        <div style={styles.left}>
          <h1 style={styles.text}>Maintenance <br/>en cours</h1>
          <p style={styles.subtext}>
            Pour toutes informations, contactez-nous au :<br />
            <b>Par téléphone :</b> 0561 14 85 63 / 0770 64 03 93<br />
            <b>Par message (Viber, WhatsApp) :</b> 0560 60 68 96
          </p>
        </div>

        <div style={styles.right}>
          <img 
            src="/assets/image/public.svg" 
            alt="Public" 
            style={styles.image} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "/assets/image/default-public.svg"
            }}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    width: "100%",
    maxWidth: "1200px",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
    minWidth: "300px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  right: {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    objectFit: "contain",
  },
  text: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "1.5rem",
    color: "#333",
  },
  subtext: {
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    lineHeight: "1.6",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    color: "#333",
    maxWidth: "500px",
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 1000,
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  retourIcon: {
    width: "32px",
    height: "32px",
  },
};

// Animation styles
const style = document.createElement('style');
style.textContent = `
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

  .backButton {
    animation: slideInFromLeft 0.5s ease-out;
  }

  .retourIcon:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column-reverse;
      gap: 20px;
      
    }
    .left, .right {
      width: 100%;
      padding: 10px;
    }
    .image {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 15px;
      padding-top: 70px;
    }
    .text {
      font-size: 1.8rem;
    }
    .subtext {
      padding: 15px;
      font-size: 1rem;
    }
    .backButton {
      top: 15px;
      left: 15px;
    }
  }
`;
document.head.appendChild(style);

export default PagePublic;