const express = require('express');

const postsRouter = require('./posts/postsRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter)

server.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
  })
});

server.get('/', (req, res) => res.status(200).send('Posts API'))

server.listen(8000, _ => console.log('\n***Server Running on Port 8000***\n'))