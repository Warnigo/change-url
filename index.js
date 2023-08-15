const countries = ["Uzbekistan", "USA", "Japan"]; // Barcha davlatlar ro'yxati

// Express.js konfiguratsiyasi va routelar
const express = require('express');
const app = express();
const port = 2000;

app.set('view engine', 'ejs'); // Template Engine sifatida ejs ni tanlash

app.get('/', (req, res) => {
  res.render('index', { countries }); // index.ejs ni render qilish, davlatlar ro'yxatini o'z ichiga oladi
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
