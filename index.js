// Importe le framework Express
const express = require('express');
const app = express();
const port = 3000;

// Définit une route pour la racine du site
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('connexion réussie');
});

app.get('/inscription', (req, res) => {
  res.send('inscription réussie');
});

// Démarre le serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});   