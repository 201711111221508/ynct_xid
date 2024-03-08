const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('MO2YaxPWXW', uuidlib.v4());
	}

module.exports = generateId
