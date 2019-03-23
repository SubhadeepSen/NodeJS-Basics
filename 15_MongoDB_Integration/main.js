const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db', {useNewUrlParser: true, useCreateIndex: true})
    .then(console.log('connected to mongo database....'));

const courseSchema = new mongoose.Schema({
    name: String,
    id: {type: Number, unique: true}
});

/*courseSchema.pre('save', (next) => {
    console.log('......' + this.name);
    next();
});*/

const Course = mongoose.model('Course', courseSchema);

async function createCourse(id) {
    const course = new Course({
        name: 'Node JS',
        id: id
    });
    
    const result = await course.save((err) => {
        if (err) throw err;
        console.log('Course saved successfully!');
    });
}

async function getCourse() {
    const courses = await Course.find();
    if(courses){
        console.log(courses);
    }
}

createCourse(1001);
createCourse(1002);
getCourse();

/*mongoose.disconnect();
console.log('disconnected');*/