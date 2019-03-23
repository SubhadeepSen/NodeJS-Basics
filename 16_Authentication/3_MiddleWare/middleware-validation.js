const jwt = require('jsonwebtoken');
const privateKey = 'middleWareJWTValidation';
module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    try{
        jwt.verify(token, privateKey);
        next();
    }catch(err){
        console.log(err.message);
        return res.status(400).send('Invalid JWT token.');
    }
}