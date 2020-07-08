#!/usr/bin/env node

const mdLinks = require('./index.js');
const path = process.argv[2];

path === undefined
  ?console.log('Unable to find path. Insert \'md-links <path-to-file>\'')
  :mdLinks(path)
  .then(arr => {
    if (arr === '') {
      console.log('There are no links in this file')
    } else {
      arr.forEach(dataObj => {
        console.log(`\nFile: ${dataObj.file} | Text: ${dataObj.text} | URL: ${dataObj.href}`);
      });
    }
  })
  .catch(err => console.log(err));
