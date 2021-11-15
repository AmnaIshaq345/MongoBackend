const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config();
//connecting to DB
mongoose.connect(
    process.env.DB_CONNECT, 
    {
        useUnifiedTopology: true, useNewUrlParser: true
    }, 
    () => console.log('connected to database')
)
//Import routes
const activityRoutes = require("./routes/activity");
//MiddleWare
app.use(express.json());
//Routes middleWare
app.use("/api/activities", activityRoutes)
const PORT= 4000;
app.listen(PORT, () => {
    `server up and running at port ${PORT}`
})

