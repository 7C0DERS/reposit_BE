const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/reposit',router)



app.listen(3006,()=>{
        console.log('server started on 3006 ')
    })



