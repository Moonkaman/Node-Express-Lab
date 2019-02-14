require('dotenv').config();

const port = process.env.PORT || 8000;

const express = require('express');

const postsRouter = require('./posts/postsRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter)

server.get('/', (req, res) => res.status(200).send('Posts API'))

server.listen(port, _ => console.log(`\n***Server Running on Port ${port}***\n`))