import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Demo from '../src/demo/component';
const app = express();



app.get('/', (req, res, next) => {
  const indexPath = path.resolve(__dirname, '../build/pageindex.html');
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if(err) {
      console.log(err);
      res.status(500).send('An error occured');
    };
    res.setHeader('Cache-Control', 'no-cache');
    const html = data.replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDOMServer.renderToString(<Demo />)}</div>`
    );
    res.send(html);
  })
});
app.use(express.static(path.resolve(__dirname, '../build')));
app.listen(3000, () => {
  console.log('ssr listening on port 3000');
})