const express = require("express");
const router = express.Router();

// Grabbing the Chris's controller folder
const employeesController = require("../controllers/employees");
//  Get all employees
router.get("/employees", employeesController.getEmployees);
//  Get employees by ID
router.get("/employees/:id", employeesController.getEmployeesById);
//  Get employees by first name
router.get(
  "/employees/firstname/:first_name",
  employeesController.getEmployeesByFirstName
);
module.exports = router;
