const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// defines a route for get requests, / is the site root
/*
app.get('/', (req, res) => {
    res.send('Hello World');
});
*/


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // sends a JSON response with status code 201
    res.status(201).json({ myMovies: movies });
});
// defines a route with parameters name 
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});
// defines a route with parameters name and surname
app.get('/hello/:name/:surname', (req, res) => {
    const { name, surname } = req.params;
    res.send(`Hello ${name} ${surname}`);
});
// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
app.use(express.static('public'));
// starts the server and listens on port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
