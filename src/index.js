import express from "express"
import  indexRouters from './routers/index.routers.js'
import empleadosRouters from './routers/empleados.routers.js'
const app=express()
app.use(express.json())
app.use(indexRouters)
app.use(empleadosRouters)



app.listen(3000)
