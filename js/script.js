const userName = prompt('Hi, whats your name?');
const userSurname = prompt('And your surname?');
const userColor = prompt('whats your favourite color?');

document.getElementById('userInfo').innerHTML = userName + ' ' + userSurname + ' ' + userColor + ' ' + '24'

console.log(userName + userSurname + userColor + '24'); 