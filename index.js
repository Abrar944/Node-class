const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send("Congratulations! You have deployed your first Node.js app! ;-) "));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
