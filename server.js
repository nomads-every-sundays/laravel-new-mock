const express = require('express');

const app = express();

app.use(express.static('./dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen('3000', () =>{
   console.log('Server running on 3000');
});

module.exports = server;
