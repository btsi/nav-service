const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/index.js');
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/headers', (req, res) => {
  db.findHeaders((err, data) => {
    if (err) (console.log(err))
    else res.send(data)
  })
})

app.get('/adventures', (req, res) => {
  db.findAdventures((err, data) => {
    if (err) (console.log(err))
    else res.send(data)
  })
})

// app.post('/populate', (req, res) => {
//   let payload = req.body;
//   // console.log(payload) 
//   console.log('made it to request');
//   const postCB = (err, data) => {
//     if (err) { console.log(err, 'error in insert')}
//     else { res.send(data) }
//   }
//   // db.findMissing(postCB);
//   db.insertAdventures(payload.events, (err, data) => {
//     if (err) { console.log(err) }
//     else db.insertHeaders(payload.headers, postCB)
//   });
// })


const navPort = 3001;
app.listen(navPort, () => {
  console.log(`Nav server awaits instructions on ${navPort}`);
});