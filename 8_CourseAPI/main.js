const express = require('express'); // express framework for developing web applications
const app = express();
const Joi = require('joi'); // for performing validation, a schema is required and needs to be defined

app.use(express.json());    // this helps to internally convert the request body to JSON, AKA middleware function

const port = process.env.PORT || 8081;

const courses = [
    {id: 1, name:'Course 1'},
    {id: 2, name:'Course 2'},
    {id: 3, name:'Course 3'},
    {id: 4, name:'Course 4'},
    {id: 5, name:'Course 5'}
];

app.get('/api/courses', (req, res) => {
    res.status(200).send(courses);
});

app.get('/api/course/:courseId', (req, res) => {
    let courseId = parseInt(req.params.courseId);
    let course = courses.find(c => c.id === courseId);
    if(!course){
        res.status(404).send(`Course with id ${courseId} not found...`);
        return;
    }
    res.status(200).send(course);
});

app.post('/api/courses', (req, res) => {
    let courseName = req.body.name;

    // The below validation can be performed by a powerfull validation framework joi by defining a validation schema
    /*if(!courseName || courseName.length < 3){
        res.status(400).send('Course name is not valid, length must be 3');
        return;
    }*/
    const schema = {
        name: Joi.string().min(3).required()
    };

    let result = Joi.validate(req.body, schema);
    if(result.error){
        //res.status(400).send(result.error);   // returns complete details of the error
        res.status(400).send(result.error.details[0].message);     // returns the specific error message
        return;
    }

    let newCourse = {
        id: courses.length + 1,
        name: courseName
    }

    courses.push(newCourse);
    res.status(201).send(newCourse);
});

app.put('/api/course/:courseId', (req, res) => {
    let courseId = parseInt(req.params.courseId);
    const existingCourse = courses.find(c => c.id === courseId);
    if(!existingCourse){
        res.status(404).send(`Course with id ${courseId} not found...`);
        return;
    }
    const schema = {
        name: Joi.string().min(3).required()
    }
    let result = Joi.validate(req.body, schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);     // returns the specific error message
        return;
    }
    existingCourse.name = req.body.name;
    res.status(200).send(existingCourse);
});

app.delete('/api/course/:courseId', (req, res) => {
    let courseId = parseInt(req.params.courseId);
    let course = courses.find(c => c.id === courseId);
    if(!course){
        res.status(404).send(`Course with id ${courseId} not found...`);
        return;
    }
    let index = courses.indexOf(course);
    courses.splice(index, 1);
    res.status(200).send(course);
});

app.listen(port, () => {
    console.log(`Listening to port ${port} ...`);
})