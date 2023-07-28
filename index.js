// run `node index.js` in the terminal
// STEP 1: IMPORT ALL NECESSARY PACKAGES
const express = require('express');
const { response } = require('./app');
const HTTP_SERVER = express();

// BASIC SERVER CONFIGS
const port = 5000;

HTTP_SERVER.listen(port, 'localhost', () => {
  console.log('SERVER STARTED IN THE PORT', port);
});

// INJECTING API SERVER
HTTP_SERVER.use('/', require('./app'));

HTTP_SERVER.get('/', (request,response,next) => {
  return response.status(200).json({
    message: 'Use /files/CreateFile to Create File & use /files/getFile to get files in that folder',
  });
})