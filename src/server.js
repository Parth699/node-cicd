const express = require('express');

const app = express();

app.get('/test',(req,res)=>{
    res.status(200).send('Hello, Test endpoint.')
})

app.get('/test0',(req,res)=>{
    res.status(200).send('Hello');
})

app.get('/',(req,res)=>{
    res.json({msg:'Hello...'});
})

app.get('/info',(req,res)=>{
    res.status(200).json({
        api: 'REST',
        verstion: 'v1',
        host: 'Ubuntu',
        port: 80,
        description: 'This is a simple node express api with ci/cd using github actions with hosted runner in ec2.'
    });

})

app.get('/tem',(req,res)=>{
    res.status(200).json({msg:'Temporary endpoint.'});
})


module.exports={app};