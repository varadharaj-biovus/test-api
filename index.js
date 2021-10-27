const express= require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/', (req, res) => { 
    res.json({'message': "I am Varadha "})
});

require('./app/routes/routes.js')(app);

var PORT =3000
app.listen(PORT, () => {console.log("server runing ",PORT)});

// DB config
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{useNewUrlParser: true
}).then(()=>{
    console.log('Successfully connected to the database');
}).catch(err =>{
    console.log("Could not connect to the database. Exiting now..",err);
});