const express = require('express');

const indexRoutes = express.Router();

// Home Page Routes
indexRoutes.get('/', (req, res) => res.status(301).redirect('/api/feedback/v1'));
indexRoutes.get('/api/feedback/v1', (req, res) => res.status(200).send({
    status: res.statusCode,
    message: 'Welcome to StreamComm Updated'
}));

module.exports = indexRoutes;