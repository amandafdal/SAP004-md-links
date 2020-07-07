const mdLinks = require('../index.js');

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should return an error when file or directory is not found', () => {
    return expect(mdLinks('./test/no-file')).rejects.toEqual('err')
  });
  it('should return an empty string when there are no links on the specified .md file', () => {
    return expect(mdLinks('./test/nolinks.md')).resolves.toEqual('')
  });
  it('should return an array of objets when there are links on the specified .md file', () => {
    return expect(mdLinks('./test/links.md')).resolves.toEqual([
      {
        file: './test/links.md',
        text: 'Node.js',
        href: 'https://nodejs.org/pt-br/'
      },
      {
        file: './test/links.md',
        text: 'motor de JavaScript V8 do Chrome',
        href: 'https://developers.google.com/v8/'
      },
      {
        file: './test/links.md',
        text: 'md-links',
        href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg'
      },
      {
        file: './test/links.md',
        text: '`import`',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import'
      },
      {
        file: './test/links.md',
        text: 'fs',
        href: 'https://nodejs.org/api/fs.html'
      },
      {
        file: './test/links.md',
        text: 'path',
        href: 'https://nodejs.org/api/path.html'
      }
    ])
  });
});
/*
[Error: ENOENT: no such file or directory, open 'D:\coding\SAP004-md-links\README.nd'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\coding\\SAP004-md-links\\README.nd'
} 
*/
