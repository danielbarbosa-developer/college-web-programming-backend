import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

server.use(express.json());

server.listen(3333, () => console.log('Server listen on port 3333'));

