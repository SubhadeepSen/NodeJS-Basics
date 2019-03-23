const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = '12345';

//Sync version
const generatedSalt = bcrypt.genSaltSync(saltRounds);
const encryptedPassword = bcrypt.hashSync(password, generatedSalt);
//console.log(generatedSalt);
console.log('Encrypted Password: ' + encryptedPassword);

const isValidPassword = bcrypt.compareSync(password, encryptedPassword);
console.log(isValidPassword);

//Async version
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("my password", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

//OR
const result = bcrypt.hash("my password", 10, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);
});