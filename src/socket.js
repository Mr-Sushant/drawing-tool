import {io} from 'socket.io-client';

const SERVER_URL = process.env.NODE_ENV === 'production' ? 'https://drawconnect-server.onrender.com' : 'http://localhost:5000';
export const socket = io(SERVER_URL);



