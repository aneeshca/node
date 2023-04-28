const express = require('express');
const router  = require('./controller/user.controller');
require('../express-angular/confguration/server')
require('../express-angular/model/employees.model')
const cors= require('cors')
const app=express();
const port=process.env.PORT || 3000
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}))

app.listen(port,()=>{
    console.log(`server :http://localhost:${port}`);
    })
    app.use('/', router);
