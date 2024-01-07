import express from "express"
import cors from 'cors';
import  indexRouters from './routers/index.routers.js'
import empleadosRouters from './routers/empleados.routers.js'

const app=express()
app.use(cors());
app.use(express.json())
app.use(indexRouters)
app.use(empleadosRouters)


export default app;