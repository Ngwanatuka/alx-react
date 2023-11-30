import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$(document).ready(function() {
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');

    // initialize a click counter
    let clickCount = 0;

    // Function to update the click counter
    function updateCounter() {
        clickCount++;
        $('#count').text(`${clickCount} clicks on the button`);
    }

    // Bind the debounce function to the click event
    $('#clickButton').on('click', _.debounce(updateCounter, 500));
});