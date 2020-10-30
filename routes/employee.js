const express = require("express");
const router = express.router();
const employeesController = require("../controllers/employees");
router.get("/employees");
module.exports = router;
