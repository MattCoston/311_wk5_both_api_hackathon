const getEmployees = (req,res,next)  {
 res.send("getting employees")

}
const getEmployeesById = (req,res,next) {
  res.send("getting employees")

}

const getEmployeesByFirstName = (req,res,next) {
  res.send("getting employees")  

}


module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }