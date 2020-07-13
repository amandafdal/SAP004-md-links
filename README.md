# Markdown Links

Markdown Links é uma biblioteca desenvolvida em [Node.js](https://nodejs.org/), executável através de linha de comando que lê arquivos .md e retorna no terminal uma lista contendo o arquivo lido, os links presentes no arquivo e seus textos correspondentes.<br>
Para leitura dos arquivos foi utilizado o [File System](https://nodejs.org/api/fs.html) e com uso de [RegEx](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) é identificado o padrão de links em arquivos .md (`[My Link](http://link.com)`).

Exemplo:

```sh
$ md-links ./mydir/mymdfile.md

File: ./mydir/mymdfile.md | Text: GitHub | URL: https://github.com/
File: ./mydir/mymdfile.md | Text: Google | URL: http://google.com/
```

## Uso e instalação
É necessário que tenha instalado o [Node.js](https://nodejs.org/) e [npm](https://docs.npmjs.com/) (já incluso no node).<br>
A biblioteca pode ser instalada via terminal com o seguinte comando:<br>
`npm install -g amandafdal/SAP004-md-links`

Para executá-lo deve ser utilizado o seguinte comando, onde `<path-to-file>` é o caminho para o arquivo que deve ser lido:<br>
`md-links <path-to-file>`

## Implementações Futuras
* Leitura de múltiplos arquivos .md existentes no diretório especificado;
* Validação dos links encontrados, retornando quais estão funcionais e quais estão quebrados;
* Status geral de cada arquivo .md informando a quantidade total de links presentes e quantidade de links sem repetição.