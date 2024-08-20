// const express = require('express')

import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import productRoutes from "./routes/productroute.js"

dotenv.config()
const app = express()
const PORT =process.env.PORT || 5000
app.use(express.json())//allow us to access json data in the req.body
app.use('/api/products', productRoutes)


app.listen(PORT, () => {
    connectDB()
    console.log("Server started successfully at http://localhost:" + PORT)
})