import { pool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

// Función encargada de el login de Usuario. Valida que el correo exista,
// que la contraseña sea igual, y que exista el rol seleccionado.
export const login = async (req, res) => {
  const { email, password, permission_id } = req.body;

  const [rows] = await pool.query("SELECT * from users WHERE email = ? AND permission_id = ?", [
    email,
    permission_id
  ]);
  if (rows.length > 0) {
    return bcrypt.compare(password, rows[0].password || "1").then((result) => {
      if (result === true) {
        const token = jwt.sign(
          {
            email,
            password,
          },
          SECRET
        );
        res.send(rows[0] );
      } else {
        res.send({ error: 1, message: "incorrect credentials" });
      }
    });
  } else {
    res.send({ error: 2, message: "user not found" });
  }
};
