const jwt = require('jsonwebtoken');

const payload = {
    username: 'john7456',
    password: 'jsUvPas@745'
}

//Hardcoding private key is a bad practice, Private Key must be provided from environment variables.
const privateKey = 'thisIsJWTExample'

//Sync
const jwtTokenSync = jwt.sign(payload, privateKey);
console.log(jwtTokenSync);

const decodedToken = jwt.verify(jwtTokenSync, privateKey);
console.log(decodedToken);

console.log('\n\n');
//***NOTE: Expiry time can also be set, Check documentation.

//Async
jwt.sign(payload, privateKey, function(err, token) {
    console.log(token);
});

const jwtTokenAsync = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG43NDU2IiwicGFzc3dvcmQiOiJqc1V2UGFzQDc0NSIsImlhdCI6MTU1MjI0MDAwMn0.M7DFnJboyft9zLhbODnlGghbejya5Ts0qtDRZnK-iIU';

jwt.verify(jwtTokenAsync, privateKey, function(err, decoded) {
    if(err){
        console.log(err.message);
        return;
    }
    console.log(decoded);
});