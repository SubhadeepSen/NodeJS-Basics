const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const middlewareJWTValidation = require('./middleware-validation');
const privateKey = 'middleWareJWTValidation';

app.use(express.json());

app.post('/register', (req, res) => {
    const user = req.body;
    if(!user || !user.username || !user.password || user.username === '' || user.password === ''){
        return res.status(400).send('Please enter valid details.');
    }
    const token = generateToken(user);
    //x must be appended for custom header as below
    res.header('x-auth-token', token).status(200).send('You have been registered...');
});

//using middleware function to validate JWT token
app.post('/login', middlewareJWTValidation, (req, res) => {
    const token = req.header('x-auth-token');
    res.header('x-auth-token', token).status(200).send('You have been logged in...');
});

function generateToken(user) {
    return jwt.sign(user, privateKey);
}

const port = 8081 || process.env.PORT;
app.listen(port, () => console.log('Listening to port ' + port + '...'));