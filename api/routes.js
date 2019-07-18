const express = require('express');
const Router = express.Router();

Router.get('/hello-world', (req, res) => {
   res.send({testing: 'This is a string that we are sending'});
});

Router.get('/hello-world-2', (req, res) => {
   res.status(404);
});

module.exports = Router;
