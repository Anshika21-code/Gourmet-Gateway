import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRoute from './routes/foodRoute.js';


//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRoute)


app.get("/", (req, res) => {
    res.send("API is running")
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

//mongodb+srv://anshikapvt21:42539683@cluster0.qztnio8.mongodb.net/?