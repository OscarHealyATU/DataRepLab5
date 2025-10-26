const express = require('express')
const app = express()
const port = 3000

// defines a route for get requests, / is the site root
app.get('/', (req, res) => {
  res.send('Welcome to Data Respresentation & Querying')
})
// error handling middleware 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// starts the server and listens on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
