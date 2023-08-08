import { pool } from '../db.js'

// Función para comprobar la conexión con la Base de Datos
export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
}