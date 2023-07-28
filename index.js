// run `node index.js` in the terminal
// STEP 1: IMPORT ALL NECESSARY PACKAGES
const express = require('express');
const HTTP_SERVER = express();

// BASIC SERVER CONFIGS
const PORT = 5000;

HTTP_SERVER.listen(PORT, '0.0.0.0', (err) => {
  if(err) throw err;
  console.log(`SERVER STARTED IN THE PORT ${PORT}`);
});

// INJECTING API SERVER
HTTP_SERVER.use('/', require('./app'));

HTTP_SERVER.get('/', (request,response,next) => {
  return response.status(200).json({
    message: 'Use /files/CreateFile to Create File & use /files/getFile to get files in that folder',
  });
})