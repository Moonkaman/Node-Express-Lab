const express = require('express');

const postsRouter = require('./posts/postsRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter)

server.get('/', (req, res) => res.status(200).send('Posts API'))

server.listen(8000, _ => console.log('\n***Server Running on Port 8000***\n'))