import openSocket from 'socket.io-client';
const socket = openSocket('localhost:3000', { query: 'auth=' +localStorage.getItem('token')});

export default socket;