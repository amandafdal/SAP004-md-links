const fs = require('fs');

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject('Unable to find path. Insert full path. E.g.: ./some/example.md')
      } else{
        const regex = /\[.[^[\](\)]*\]\(http[^#][^[\](\)]*\)/gm;
        const dataMatch = data.match(regex);
        if (!dataMatch) {
          return resolve('');
        } else {
          let arr = [];
          dataMatch.map(ref => {
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
      }
    });
  })
};

module.exports = mdLinks;
