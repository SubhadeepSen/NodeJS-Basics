const express = require('express');
const app = express();
const Joi = require('joi');

/*
In this module the code for course validation has been moved to a different function and here the 
concept of object destructable has been used. {error}
*/

app.use(express.json());

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
    let {error} = validateCourse(req.body); // this is equivalent to result.error, AKA object destructable
    if(error){
        res.status(400).send(error.details[0].message);
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
    }
    
    let {error} = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
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

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
}

app.listen(port, () => {
    console.log(`Listening to port ${port} ...`);
})