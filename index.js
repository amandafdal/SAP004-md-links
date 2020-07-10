const fs = require('fs');
const regex = /\[.[^[\](\)]*\]\(http[^#][^[\](\)]*\)/gm;

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject('Unable to find path. Insert full path. E.g.: ./some/example.md')
      } else if (!data.match(regex)) {
          return resolve('');
        } else {
          let arr = [];
          data.match(regex).map(ref => {
            const refSplit = ref.split('](')
            const obj = {
              file: path,
              text: refSplit[0].replace('[', ''),
              href: refSplit[1].replace(')', ''),
            };
            arr.push(obj);
          })
          return resolve(arr)
        }
    });
  })
};

module.exports = mdLinks;
