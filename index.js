const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json());

const xRouters = require('./routes/xRouters');

app.use('/api', xRouters);

app.listen(port, ()=>{
    console.log('servidor corriendo '+ port)
})