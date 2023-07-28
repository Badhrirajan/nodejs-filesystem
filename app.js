const express = require('express');
const APP_SERVER = express();

// REGISTER ALL THE CONTROLLER IN APP SERVER
APP_SERVER.use('/files', require('./Controllers/Filescontroller'));

module.exports = APP_SERVER;