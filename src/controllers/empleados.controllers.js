import {pool} from '../db.js'
export const getEmpleados = async (req,res)=>{
     const [rows]= await pool.query('SELECT * FROM empleados')
     res.json(rows)
}
export const getEmpleado = async (req,res)=>{
    const [rows]= await pool.query('SELECT * FROM empleados WHERE id=?',[req.params.id])
    if(rows.length<=0) return res.status(400).json({message:'Empleado no encontrado'})
    res.json(rows[0])
}

export const createEmpleado = async (req,res)=>{
    const { nombre,salario } =req.body
    const [rows] = await pool.query('INSERT INTO  empleados (nombre,salario) VALUES(?, ?)',[nombre,salario])
    res.send({
        id:rows.insertId,
        nombre,
        salario,
    })
}  

export const updateEmpleado = async (req,res)=>{
    const {id}=req.params
    const {nombre ,salario} =req.body
    const [result]= await pool.query('UPDATE empleados SET nombre=?, salario=? WHERE id=?',[nombre, salario, id])
    if(result.affectedRows<+0) return res.status(404).json({message:"Empleado no actualizado"})

}

export const deleteEmpleado =async (req,res)=>{
    const [result]= await pool.query('DELETE  FROM empleados WHERE id=?',[req.params.id])
    if(result.affectedRows<=0) return res.status(404).json({message:"Empleado no encontrado"})
    res.sendStatus(204)
}