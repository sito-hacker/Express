const express = require('express')
const dotenv = require('dotenv')

const  cors = require('cors')
const {rateLimit} = require('express-rate-limit')
const helmet =require ('helmet')




const app = express()

app.use(cors())
app.use(helmet())

const limiter = rateLimit({
    windowsMs: 15 * 60 * 1000,
    limit: 100,
    message: " To many request try again in 1000days"
})

app.get('/', (req, res, next) =>{
    res.status(200)
        message: "Welcome to express App"
})

app.get((req, res, next) =>{
    res.status(404).json({
        message:"Route not found"
    })
}

)

const PORT = process.env.PORT|| 5000
const HOST = process.env.IP || 
 app.listen(PORT, () =>{
    console.log('Express is running')
})