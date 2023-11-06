const express = require('express');
const app = express();
const port = 8080;
const knex = require('knex')(require('./knexfile.js')['development'])
const cors = require('cors');


app.use(cors());


app.get('/', (req, res) => {
 res.send(' Application running')
});

app.get('/movies', (req, res) => {
 knex('movie_list')
    .select('*')
    .then(data => { 
        return res.json(data)
        
    })
});

app.post('/movies', (req, res) => {
    const movieData = req.body; 
    knex('movie_list')
       .insert(movieData)
       .then(() => {
         res.status(201).send('Movie added successfully');
       })
       .catch(error => {
         console.error(error);
         res.status(500).send('Error adding movie');
       });
  });
  

app.listen(port, () => console.log(`listening on port ${port}`))