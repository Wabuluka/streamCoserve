const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

dotenv.config();

// use modules
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// morgan
app.use(morgan('dev'))

// routes
const routes = require('./source/routes/index.routes');
// const feedback = require('./api/routes/feedback.routes')

// routes
app.use(routes);
// app.use(feedback);

require('./source/routes/feedback.routes')(app);

// start server
app.listen(process.env.PORT || 4000, () => console.log(`Server started, listening port: ${process.env.PORT}`));
