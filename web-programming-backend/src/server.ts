import express from 'express';
import cors from 'cors';
import './infrastructure';
import router from './routes';


const server = express();

server.use(cors());

server.use(express.json());

server.use(router);

server.listen(3333, () => console.log('Server listen on port 3333'));

