const jwt = require("jsonwebtoken")
import { SECRET } from '../config.js'

function asignToken(data){
    return jwt.sign(data, SECRET)
}

export default asignToken