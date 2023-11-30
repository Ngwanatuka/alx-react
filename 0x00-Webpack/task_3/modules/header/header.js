import $ from 'jquery';
import './header.css';

// logo and H1 title to the header
$('body').append("<div id='logo'></div>");
$('body').append('<h1>Holberton Dashboard</h1>');

// Log initilization message
console.log('Init header');