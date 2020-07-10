const fs = require('fs');
let arr = [];

const readFiles = (cliPath) => {
  const regex = /\[.[^[\](\)]*\]\(http[^#][^[\](\)]*\)/gm;
  return new Promise((resolve, reject) => {
    fs.readFile(cliPath, 'utf8', (err, data) => {
      if (err) {
        return reject('Unable to find file.')
      } else if (!data.match(regex)) {
        return resolve('');
      } else {
        data.match(regex).map(ref => {
          const refSplit = ref.split('](')
          const obj = {
            file: cliPath,
            text: refSplit[0].replace('[', ''),
            href: refSplit[1].replace(')', ''),
          };
          arr.push(obj);
        })
      }
      return resolve(arr)
    });
  })
}

module.exports = readFiles;
