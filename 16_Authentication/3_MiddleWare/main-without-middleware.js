const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const privateKey = 'middleWareJWTValidation';

app.use(express.json());

app.post('/register', (req, res) => {
    const user = req.body;
    console.log(user);
    if(!user || !user.username || !user.password || user.username === '' || user.password === ''){
        return res.status(400).send('Please enter valid details.');
    }
    const token = generateToken(user);
    res.header('x-auth-token', token).status(200).send('You have been registered...');
});

app.post('/login', (req, res) => {
    const token = req.header('x-auth-token');
    if(!token || !isValidToken(token)){
        return res.status(400).send('Invalid JWT token.');
    }
    res.header('x-auth-token', token).status(200).send('You have been logged in...');
});

function generateToken(user) {
    return jwt.sign(user, privateKey);
}

function isValidToken(token) {
    try{
        jwt.verify(token, privateKey);
        return true;
    }catch(err){
        console.log(err.message);
        return false;
    }
}

const port = 8081 || process.env.PORT;
app.listen(port, () => console.log('Listening to port ' + port + '...'));