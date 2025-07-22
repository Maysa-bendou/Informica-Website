import React, { useRef, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import all section styles
import aproposStyles from '../../styles/Apropos.module.css';
import contactStyles from '../../styles/Contact.module.css';
import referencesStyles from '../../styles/NosReferences.module.css';
import formationsStyles from '../../styles/NosFormations.module.css';

import telephoneIcon from '../../assets/image/icons/telephone-svgrepo-com.svg';
import emailIcon from '../../assets/image/icons/gmail-svgrepo-com.svg';
import locationIcon from '../../assets/image/icons/location-pin-svgrepo-com.svg';

// Merge all styles into one object
const styles = {
  ...aproposStyles,
  ...contactStyles,
  ...referencesStyles,
  ...formationsStyles,
};

export default function ContactPage() {
  const formRef = useRef();
  const [formErrors, setFormErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const entreprise = form.entreprise.value.trim();
    const fonction = form.fonction.value.trim();
    const telephone = form.telephone.value.trim();
    const email = form.email.value.trim();
    const demande = form.demande.value.trim();

    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!entreprise) errors.entreprise = "Nom de l'entreprise est requis.";
    if (!fonction) errors.fonction = "Fonction est requise.";
    if (!telephone) errors.telephone = "Téléphone est requis.";
    if (!email) {
      errors.email = "Email est requis.";
    } else if (!emailRegex.test(email)) {
      errors.email = "L'email n'est pas valide.";
    }
    if (!demande) errors.demande = "La demande est requise.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({}); // clear errors

    emailjs.sendForm(
      'service_jmsmyot',     // <-- your EmailJS service ID
      'template_4hggv13',    // <-- your EmailJS template ID
      formRef.current,
      'bz87tGmRWCY2zXl0_'    // <-- your EmailJS public key
    )
    .then((result) => {
      toast.success('Message envoyé avec succès !');
      form.reset();
    }, (error) => {
      toast.error("Échec de l'envoi du message.");
      console.error(error.text);
    });
  };

  return (
    <>
      <Header page="entreprise" />

      <main className={styles.mainContent}>
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
              <a
                href="https://maps.app.goo.gl/uPSx7eH8Z2ApDGsQA"
                className={styles.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View en map
              </a>
            </div>

            <div className={styles.contactHeader}>
              <img src={telephoneIcon} alt="Téléphone" className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>Téléphone</h3>
              <div className={styles.contactContent}>
                {['0661 83 23 78', '0661 57 93 35', '0774 37 32 71'].map((phone) => (
                  <p
                    key={phone}
                    className={styles.copyPhone}
                    onClick={() => navigator.clipboard.writeText(phone)}
                    title="Cliquez pour copier"
                    style={{ cursor: 'pointer' }}
                  >
                    {phone}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.contactHeader}>
              <img src={emailIcon} alt="Email" className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>Email</h3>
              <a
                href="mailto:efp.informica@gmail.com"
                className={styles.emailLink}
                title="Cliquez pour envoyer un email"
              >
                efp.informica@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.contactFormMapTitles}>
            <h3 className={styles.contactFormTitle}>Demande d'informations</h3>
            <h3 className={styles.contactMapTitle}>Localisation</h3>
          </div>

          <div className={styles.contactContainer}>
            <div className={styles.contactFormWrapper}>
              <form ref={formRef} onSubmit={sendEmail} className={styles.contactForm} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="entreprise">Nom de l'entreprise</label>
                    <input
                      id="entreprise"
                      name="entreprise"
                      type="text"
                      className={formErrors.entreprise ? styles.inputError : ''}
                      aria-describedby="error-entreprise"
                      required
                    />
                    {formErrors.entreprise && (
                      <span id="error-entreprise" className={styles.errorText}>
                        {formErrors.entreprise}
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="fonction">Fonction</label>
                    <input
                      id="fonction"
                      name="fonction"
                      type="text"
                      className={formErrors.fonction ? styles.inputError : ''}
                      aria-describedby="error-fonction"
                      required
                    />
                    {formErrors.fonction && (
                      <span id="error-fonction" className={styles.errorText}>
                        {formErrors.fonction}
                      </span>
                    )}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="telephone">Téléphone</label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      className={formErrors.telephone ? styles.inputError : ''}
                      aria-describedby="error-telephone"
                      required
                    />
                    {formErrors.telephone && (
                      <span id="error-telephone" className={styles.errorText}>
                        {formErrors.telephone}
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={formErrors.email ? styles.inputError : ''}
                      aria-describedby="error-email"
                      required
                    />
                    {formErrors.email && (
                      <span id="error-email" className={styles.errorText}>
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="demande">Demande</label>
                    <textarea
                      id="demande"
                      name="demande"
                      rows="4"
                      className={formErrors.demande ? styles.inputError : ''}
                      aria-describedby="error-demande"
                      required
                    />
                    {formErrors.demande && (
                      <span id="error-demande" className={styles.errorText}>
                        {formErrors.demande}
                      </span>
                    )}
                  </div>
                </div>

                <button type="submit" className={styles.submitButton}>Envoyer</button>
              </form>
            </div>

            <div className={styles.contactMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.850038517255!2d3.4738196745132837!3d36.75017047052039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e6894f50955a3%3A0xd2fb5879965cb157!2sINFORMICA%2C%20Ecole%20de%20langues%20et%20informatique!5e0!3m2!1sfr!2sdz!4v1752874788649!5m2!1sfr!2sdz"
                className={styles.mapIframe}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Informica"
              />
            </div>
          </div>
        </section>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Footer />
    </>
  );
}
