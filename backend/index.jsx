const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db.jsx')
const router = require('./routes/index.jsx')


const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials:true
}
   
))
app.use(express.json())
app.use("/api", router)
app.use(cookieParser())

const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("connected to DB")
        console.log('server is running')
})

})
