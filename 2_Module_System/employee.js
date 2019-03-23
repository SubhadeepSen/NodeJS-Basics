var employee = {
    id: 100458,
    name: 'Subhadeep Sen',
    designation: 'System Engineer',
    role: 'Software Developer',
    salary: 25364,
    age: 26,
    technology: ['JAVA', 'REST', 'MULE', 'ANGULAR 5', 'NODE JS'],
    address:{
        line: 'Pride Home',
        city: 'Hyderabad',
        state: 'Telegana',
        zipCode: 500032
    }
}

function getEmployeeId(){
    return employee.id;
}

module.exports.employee = employee;
module.exports.getEmpId = getEmployeeId;