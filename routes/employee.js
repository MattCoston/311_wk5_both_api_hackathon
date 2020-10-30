const express = require("express");
const router = express.router();

// Grabbing the Chris's controller folder
const employeesController = require("../controllers/employees");
//  Get all employees
router.get("/employees", employeesController.getEmployees);
//  Get employees by ID
router.get("/employees/:id", employeesController.getEmployeesById);
module.exports = router;
