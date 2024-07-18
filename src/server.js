const express = require('express');

const app = express();

app.get('/test',(req,res)=>{
    res.status(200).send('Hello, Test endpoint.')
})

app.get('/',(req,res)=>{
    res.json({msg:'Hello...'});
})

app.get('/info',(req,res)=>{
    res.status(200).json({
        api: 'REST',
        host: 'Ubuntu',
        port: 80,
        description: 'This is a simple node express api with ci/cd using github actions with hosted runner in ec2.'
    });

})

app.get('/tem',(req,res)=>{
    res.status(200).json({msg:'Temporary endpoint.'});
})

module.exports={app};