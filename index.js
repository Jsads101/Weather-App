const express = require('express');
const app = express();
const port = 8000;
app.use(express.static('public'));
const path = require('path')
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
//const main = require("../public/main.js")

app.get('/', (req, res) => {
  res.render("index")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

// app.get('/weather', (req, res) => {
//   const selectedCity = req.params.city
//   console.log(selectedCity)
//   res.render("index")
// });