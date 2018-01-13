const express = require('express');
const app = express ();
/** database connectivity **/
const mongoose = require('mongoose');
const config = require('./config/database.js')
mongoose.connect(config.uri, (err)=>{
    if(err){
        console.log('could not connect to db..')
    }
    else{
        console.log(`connected to database :  ${config.db}`)
        // console.log(`secret ${config.secret}`)
    }
});
mongoose.promise = global.Promise;
mongoose.connect();
const path = require ('path')

app.use(express.static(__dirname+'/client/dist'))
//  /home or / only
app.get('*',(req,res) =>{
    // res.send('<h1>hello worls! </h1>')
    res.sendFile(path.join(__dirname+'/client/dist/index.html'))
})

app.listen(8080,()=>{
    console.log('listening to port - 8080');
})
