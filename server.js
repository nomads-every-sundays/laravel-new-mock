const express = require('express');

// my modules
const app = express();
const Routes = require('./api/routes');

app.use(express.static('./dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', Routes);

const server = app.listen('3000', () =>{
   console.log('Server running on 3000');
});

module.exports = server;
