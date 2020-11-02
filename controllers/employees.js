const apiError = require("../error/ApiError");

const getEmployees = (req,res,next) {
    if (!employees) {
        next(apiError.badRequest("msg field is required and must be non blank"));
        return;
      }
      //put code here
}
const getEmployeesById = (req,res,next) {
    //create variables here

    if (!employee) {
        next(apiError.badRequest("No such user exist."));
        return;
      }
      //put response here
}

const getEmployeesByFirstName = (req,res,next) {
  
    if (!name) {
        next(apiError.badRequest("No such user exist."));
        return;
      }
}


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }