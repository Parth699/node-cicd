const express = require('express');

const app = express();

app.get('/test',(req,res)=>{
    res.status(200).send('Hello, Test .')
})

app.get('/',(req,res)=>{
    res.json({msg:'Hello...'});
})

module.exports={app};