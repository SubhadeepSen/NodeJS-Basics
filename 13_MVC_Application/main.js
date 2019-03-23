const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {title:'Express MVC', message: 'Welcome Express MVC Application'});
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Listening to port ${port} ...`);
})