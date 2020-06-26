'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    let data = os.networkInterfaces();
    console.log(data);
    res.json(data);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

//get some code pushed