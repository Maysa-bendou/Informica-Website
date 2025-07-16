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
          <h3 className={styles.contactTitle}><img src={telephoneIcon} alt="Téléphone" /> Téléphone: </h3>
          <p className={styles.contactContent}>
            0661 83 23 78 <br/>
            0661 57 93 35 <br/>
            0774 37 32 71
          </p>
        </div>

        <div className={styles.contactHeader}>     
          <h3 className={styles.contactTitle}><img src={emailIcon} alt="Email" /> Email: </h3>
          <p className={styles.contactContent}>efp.informica@gmail.com</p>
        </div>
        
        <div className={styles.contactHeader}>
          <h3 className={styles.contactTitle}><img src={locationIcon} alt="Adresse" /> Adresse: </h3>
          <p className={styles.contactContent}>
            Division 4, Gr Pr no 1224, lot no 1, 2ième étage, Boumerdès 35000
          </p>
        </div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm}>
            <h3>Demande d'informations</h3>

            <div className={styles.formRow}>
              <div className={`${styles.formGroup} ${styles.full}`}>
                <label htmlFor="entreprise">Nom de l'entreprise <span>*</span></label>
                <input type="text" id="entreprise" name="entreprise" required />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="fonction">Fonction</label>
                <input type="text" id="fonction" name="fonction" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Téléphone <span>*</span></label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={`${styles.formGroup} ${styles.full}`}>
                <label htmlFor="message">Demande <span>*</span></label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
            </div>

            <input type="submit" value="Envoyer" className={styles.submitButton} />
          </form>
        </div>

        <div className={styles.contactMap}>
          <h3>Localisation</h3>
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