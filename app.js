const express = require('express');
const chalk = require("chalk");
const debug = require('debug');
const morgan = require('morgan');
const app = express();
const port = 2800;
app.use(morgan('combined'));

app.get("/",(req,res)=>{

    res.send('hello pavi');
})
app.listen(port, ()=>{
    debug.log("ma leaw jaaaa "+chalk.green(port));
})