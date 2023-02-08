import dotenv from "dotenv";
import Server from './models/server';

// Config dot.env
dotenv.config();

const server = new Server();


server.listen()
