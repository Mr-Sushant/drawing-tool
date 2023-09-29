import {io} from 'socket.io-client';
import { SERVER_URL } from './constants';

export const socket = io("http://localhost:5000");



