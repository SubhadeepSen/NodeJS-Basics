const express = require('express');
const app = express();

const port = process.env.PORT || 8081;

app.get('/index', (req, res) => {
    res.send('This is a test for GET method');
});

app.get('/pathParam/:paramVar', (req, res) => {
    let message = req.params.paramVar;
    res.send(`This is a test for reading path param = ${message}`);
});

app.get('/queryParam', (req, res) => {
    let message = req.query.queryVar;
    res.send(`This is a test for reading query param = ${message}`);
});

app.listen(port, () => {
    console.log(`Listening to port ${port} ...`);
})