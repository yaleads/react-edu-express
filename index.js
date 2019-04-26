const express = require('express');

require('@babel/register');
require('@babel/polyfill');

const render = require('./render').default;

const app = express();


app.get('/', async (req, res) => {
  const response = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Serverside rendering React App</title>
      </head>
      <body>
        <div id="root">${await render()}</div>
      </body>
    </html>
  `;

  res.send(response)
});

app.listen(4002, () => console.log('Server is listening on 4002'));