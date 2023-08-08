import { pool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

// Función que obtiene todos los usuarios de la Base de Datos.
// Autorización con JWT incompleta
export const getUsers = async (req, res) => {
  // const token = req.headers.authorization.split(" ")[1]
  // const payload = jwt.verify(token, SECRET)
  // if (Date.now() > payload.exp){
  //     return res.status(401).send({ error: "token expired"})
  // }

  try {
    const [rows] = await pool.query("SELECT * from users");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

// Función que obtiene un Usuarip de la Base de Datos
export const getUser = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * from users WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({
        message: "User not found",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

// Función para crear un nuevo Usuario
// la contraseña se encripta con bcrypt
export const createUsers = async (req, res) => {
  const { name, email, password, permission_id } = req.body;
  const passwordCrypt = await bcrypt.hash(password.toString(), 5);
  try {
    const [rows] = await pool.query(
      "INSERT INTO users (name, email, password, permission_id) VALUES (?,?,?,?)",
      [name, email, passwordCrypt, permission_id]
    );
    res.send({
      id: rows.insertId,
      name,
      email,
      passwordCrypt,
      permission_id,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

// Función que se encarga de eliminar el registro de un Usuario
export const deleteUsers = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "User not found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

// Función para actualizar un registro de un Usuario 
export const updateUsers = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, permission_id } = req.body;
  const passwordCrypt = await bcrypt.hash(password.toString(), 5);

  try {
    const [result] = await pool.query(
      "UPDATE users SET name = IFNULL(?, name), email = IFNULL(?, email), password = IFNULL(?, password), permission_id = IFNULL(?, permission_id) WHERE id = ?",
      [name, email, passwordCrypt, permission_id, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Users not found",
      });

    const [rows] = await pool.query("SELECT * from users WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
