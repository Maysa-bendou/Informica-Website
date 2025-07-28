const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { entreprise, fonction, telephone, email, demande } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptions = {
      from: `"${entreprise}" <${email}>`,
      to: process.env.MAIL_TO,
      subject: 'Nouvelle demande d\'informations',
      text: `
        Nom de l'entreprise: ${entreprise}
        Fonction: ${fonction}
        Téléphone: ${telephone}
        Email: ${email}
        Demande: ${demande}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    res.status(500).json({ message: "Erreur lors de l'envoi" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));
