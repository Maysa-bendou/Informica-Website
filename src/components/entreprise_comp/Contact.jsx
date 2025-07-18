import React from 'react';
import styles from '../../styles/PageEntreprise.module.css';
import telephoneIcon from '../../assets/image/icons/telephone-svgrepo-com.svg';
import emailIcon from '../../assets/image/icons/gmail-svgrepo-com.svg';
import locationIcon from '../../assets/image/icons/location-pin-svgrepo-com.svg';

function Contact() {
  return (
    <section id="Contact" className={styles.sectionContact}>
      <h2 className={styles.sectionTitle}>Contactez-nous</h2>

      <div className={styles.contactInfo}>
  <div className={styles.contactHeader}>
    <img src={locationIcon} alt="Location" className={styles.contactIcon} />
    <h3 className={styles.contactTitle}>Adresse</h3>
    <p className={styles.contactContent}>
      Division 4, Gr Pr no 1224,<br />
      lot no 1, 2ième étage,<br />
      Boumerdès 35000
    </p>
  </div>

  <div className={styles.contactHeader}>
    <img src={telephoneIcon} alt="Téléphone" className={styles.contactIcon} />
    <h3 className={styles.contactTitle}>Téléphone</h3>
    <p className={styles.contactContent}>
      0661 83 23 78<br />
      0661 57 93 35<br />
      0774 37 32 71
    </p>
  </div>

  <div className={styles.contactHeader}>
    <img src={emailIcon} alt="Email" className={styles.contactIcon} />
    <h3 className={styles.contactTitle}>Email</h3>
    <p className={styles.contactContent}>
      efp.informica@gmail.com
    </p>
  </div>
      </div>

      <div className={styles.contactFormMapTitles}>
        <h3 className={styles.contactFormTitle}>Demande d'informations</h3>
        <h3 className={styles.contactMapTitle}>Localisation</h3>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm}>
  <div className={styles.formRow}>
    <div className={styles.formGroup}>
      <label htmlFor="entreprise">Nom de l'entreprise</label>
      <input id="entreprise" type="text" />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="fonction">Fonction</label>
      <input id="fonction" type="text" />
    </div>
  </div>

  <div className={styles.formRow}>
    <div className={styles.formGroup}>
   <label htmlFor="telephone">Téléphone</label>
      <input id="telephone" type="tel" />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </div>
  </div>

  <div className={styles.formRow}>
    <div className={styles.formGroup}>
      <label htmlFor="demande">Demande</label>
      <textarea id="demande" rows="4" />
    </div>
  </div>

  <button type="submit" className={styles.submitButton}>Envoyer</button>
</form>

        </div>

        <div className={styles.contactMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.1323242780145!2d3.3779732152782547!3d36.75354297995659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadc6cdb3a0e1%3A0x8cfedb27b8cd8b56!2sBoumerdes!5e0!3m2!1sen!2sdz!4v1659808290304!5m2!1sen!2sdz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Informica"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
