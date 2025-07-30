import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Contact.module.css';

import telephoneIcon from '../../../assets/image/icons/telephone-call.png';
import emailIcon from '../../../assets/image/icons/gm.png';
import locationIcon from '../../../assets/image/icons/maps-and-flags.png';

export default function ContactPage() {
  const formRef = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (formData) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.entreprise.trim()) {
      errors.entreprise = "Le nom de l'entreprise est requis";
    }
    
    if (!formData.fonction.trim()) {
      errors.fonction = "La fonction est requise";
    }
    
    if (!formData.telephone.trim()) {
      errors.telephone = "Le téléphone est requis";
    }
    
    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Veuillez entrer un email valide";
    }
    
    if (!formData.demande.trim()) {
      errors.demande = "La demande est requise";
    }
    
    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = formRef.current;

    const formData = {
      entreprise: form.entreprise.value,
      fonction: form.fonction.value,
      telephone: form.telephone.value,
      email: form.email.value,
      demande: form.demande.value
    };

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      toast.success(response.data.message);
      form.reset();
    } catch (error) {
      toast.error("Erreur lors de l'envoi");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

      <Header page="entreprise" />

      <main className={styles.mainContent}>
        <section id="Contact" className={styles.sectionContact}>
          <h2 className={styles.sectionTitle}>Contactez-nous</h2>

          {/* Infos de contact */}
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
                Voir sur la carte
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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=efp.informica@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.emailLink}
                title="Cliquez pour envoyer un email"
              >
                efp.informica@gmail.com
              </a>
            </div>
          </div>

          {/* Conteneur Formulaire + Carte */}
          <div className={styles.contactContainer}>
            {/* Bloc Formulaire */}
            <div className={styles.contactFormWrapper}>
              <h3 className={styles.contactFormTitle}>Demande d'informations</h3>
              <form ref={formRef} onSubmit={sendEmail} className={styles.contactForm} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="entreprise">Nom de l'entreprise</label>
                    <input 
                      id="entreprise" 
                      name="entreprise" 
                      type="text" 
                      className={formErrors.entreprise ? styles.inputError : ''}
                      required 
                    />
                    {formErrors.entreprise && <span className={styles.errorText}>{formErrors.entreprise}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="fonction">Fonction</label>
                    <input 
                      id="fonction" 
                      name="fonction" 
                      type="text" 
                      className={formErrors.fonction ? styles.inputError : ''}
                      required 
                    />
                    {formErrors.fonction && <span className={styles.errorText}>{formErrors.fonction}</span>}
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
                      required 
                    />
                    {formErrors.telephone && <span className={styles.errorText}>{formErrors.telephone}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      className={formErrors.email ? styles.inputError : ''}
                      required 
                    />
                    {formErrors.email && <span className={styles.errorText}>{formErrors.email}</span>}
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
                      required 
                    />
                    {formErrors.demande && <span className={styles.errorText}>{formErrors.demande}</span>}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </form>
            </div>

            {/* Bloc Carte */}
            <div className={styles.contactMapWrapper}>
              <h3 className={styles.contactMapTitle}>Localisation</h3>
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