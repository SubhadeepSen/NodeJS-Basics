const logger = require('./logger');	// for importing custome defined module './complete-path'

const employee = require('./employee');

const id = employee.getEmpId();

logger('Employee ID: ' + id);

logger(employee);