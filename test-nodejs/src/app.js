import express from 'express'
import usersRoutes from './routes/users.routes.js'
import indexRoutes from './routes/index.routes.js'
import loginRoutes from './routes/login.routes.js'
import cors  from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use(indexRoutes)
app.use('/api', usersRoutes)
app.use('/api', loginRoutes)

app.use((req, res, next)=> {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app