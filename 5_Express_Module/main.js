const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.send('Welcome to express framework');
});

app.get('/number', (req, res) =>{
    res.send(JSON.stringify([1,2,3,4,5,6,7,8,9]));
});

app.get('/name', (req, res) =>{
    res.send(JSON.stringify(['Subhadeep', 'Subha', 'Deep']));
});

app.get('/test', (req, res) =>{
    res.send('mew');
});

console.log('Listening to port no. 8081 ....');
app.listen(8081);