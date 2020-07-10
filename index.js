const fs = require('fs');
const path = require('path');
const readFiles = require('./readFiles.js')

const mdLinks = (cliPath) => {
  return new Promise((resolve, reject) => {
  fs.stat(cliPath, (err, stats) =>{
    if (err){
      console.log(err)
    }else if (stats.isDirectory()) {
        fs.readdir(cliPath, (err, files) => {
          if (err) {
            return reject('Unable to find path.')
          }else{
            files.forEach(file => {
              if (path.extname(file) === '.md'){
                const fullpath = path.join(cliPath,file)
                resolve(readFiles(fullpath))
              }
            })
          }
        });
      } else {
        return readFiles(cliPath)
      }
    })
  })
};

module.exports = mdLinks;
