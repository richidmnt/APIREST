import { Router } from "express";
import { createEmpleado, deleteEmpleado, getEmpleados, updateEmpleado ,getEmpleado} from "../controllers/empleados.controllers.js";
const router = Router()
router.get('/employess',getEmpleados)
router.get('/employess/:id',getEmpleado)

router.post('/employess',createEmpleado)

router.put('/employess/:id',updateEmpleado)

router.delete('/employess/:id',deleteEmpleado)
export default router