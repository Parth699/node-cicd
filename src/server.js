const express = require('express');

const app = express();

app.get('/test',(req,res)=>{
    res.status(200).send('Hello, Test endpoint...')
})

app.get('/',(req,res)=>{
    res.json({msg:'Hello...'});
})

module.exports={app};