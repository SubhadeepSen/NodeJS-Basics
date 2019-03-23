const express = require('express');
const app = express();
const Joi = require('joi');
const morgan = require('morgan');
const debug = require('debug')('course:api');
const courseRouter = require('./routes/course');

app.use('/api/course', courseRouter);
app.use(express.json());

const port = process.env.PORT || 8081;

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debug('loading morgan middleware to log http request and response...');
}

app.listen(port, () => {
    console.log(`Listening to port ${port} ...`);
})