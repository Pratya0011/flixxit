import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import connection from "./db/index.js";
import adminRouter from "./routes/AdminAuth.js";
import userRouter from "./routes/UserAuth.js"
import adminDashboad from "./routes/AdminDashboard.js"
import homeRouter from "./routes/homeRouts.js"
import searchRouter from "./routes/searchRoute.js"
import movieRouter from "./routes/movieRoutes.js"
import tvRouter from "./routes/tvRoutes.js"
import watchlistRouter from "./routes/watchlistRoutes.js"
import subscribePlan from './routes/subscribeRoute.js'

import { config } from "dotenv";
config()
const app = express()
app.use(cors({origin:"http://localhost:3000"}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send({
        message1:'Movies,TV Shows and more...'
    });
  });
app.use('/admin', adminRouter)
app.use('/user', userRouter)
app.use('/admin', adminDashboad)
app.use('/user',homeRouter)
app.use('/user',searchRouter)
app.use('/user',movieRouter)
app.use('/user',tvRouter)
app.use('/user',watchlistRouter)
app.use('/user',subscribePlan)

connection.then(()=>app.listen(process.env.PORT, ()=>{
    console.log('server listening on port 8080')
    console.log('connected to mongoDB')
})).catch((err)=>{
    console.log('server failed to listen with error', err)
});

