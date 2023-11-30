import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // initialize click counter

    let clickCount = 0;

    // Function to update the counter

    function updateCounter() {
        clickCount++;
        $('#count').text(`${clickCount} clicks on the button`);
    }

    // Bind the debounce function to the click event
    $('#clickButton').on('click', _.debounce(updateCounter, 500));
});
