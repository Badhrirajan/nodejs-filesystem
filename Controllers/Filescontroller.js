const FilesRouter = require('express').Router();
const fs = require('fs');
const content = new Date().toString().replace(/[:.]/g,'-');
const path = `./files/${content}.txt`

FilesRouter.get('/createFile', (request, response, next) => {
  fs.writeFileSync(path,content);
  return response.status(200).json({
    message: 'File Created Successfully',
  });
});

FilesRouter.get('/getFile', (request, response, next) => {
  fs.readdir('./files',(err,data) => {
    if(err){
      console.log("Error in fetching data")
      }else {
        return response.status(200).json({
        Files: data
      });
    }
  })
});

module.exports = FilesRouter;
