const express = require('express');
const Router = express.Router();

Router.get('/hello-world', (req, res) => {
   res.send({testing: 'This is a string that we are sending'});
});

module.exports = Router;
