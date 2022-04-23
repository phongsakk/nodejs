const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get("/", (req, res) => {
    res.send('Hello Phongsak.');
});

app.get("/ggez", (req, res) => {
    res.send('GGEZzzzzzzzzzzzz');
});

app.listen(port, () => {
    console.log('listening on port' + chalk.green(":" + port));
});