import openSocket from 'socket.io-client';
const socket = openSocket('54.37.228.12:3000', { query: 'auth=' + localStorage.getItem('token')});

export default socket;