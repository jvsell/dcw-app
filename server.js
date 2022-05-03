'use strict';

const express = require('express');

// Constants
 const PORT = 80;
const HOST = '0.0.0.0';
 // App
 const app = express();
 app.get('/', (req, res) => {
   res.send('<h1>Stay 127.0.0.1 and Use a 255.255.255.0! V 2.0</h1>');
   });

   app.listen(PORT, HOST);
   console.log(`Running on http://${HOST}:${PORT}`);
