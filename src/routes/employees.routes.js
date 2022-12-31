import { Router } from "express";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from "../controllers/employees.controller.js";
const router = Router();

router.get('/employee', getEmployees);

router.get('/employee/:id', getEmployee);

router.post('/employee', createEmployee);

router.delete('/employee/:id', deleteEmployee);

router.patch('/employee/:id', updateEmployee);

export default router