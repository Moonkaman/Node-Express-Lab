const express = require('express');

const server = express();

server.use(express.json);

server.listen(8000, _ => console.log('\n***Server Running on Port 8000***\n'))