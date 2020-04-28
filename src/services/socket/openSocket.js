import openSocket from 'socket.io-client';
console.log(process.env.REACT_APP_SOCKET + " : SOCKET connect")
const socket = openSocket(process.env.REACT_APP_SOCKET, { query: 'auth=' + localStorage.getItem('token')});
export default socket;