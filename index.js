const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

const controllers = require('./controllers');

app.use('/transactions', controllers.transaction);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Running on port ${port}!`));