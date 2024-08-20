import $ from "jquery";
const _ = require("lodash");
import './body.css';

let count = 0;

const updateCounter = () => {
    count++;
    $("#count").text(`${count} clicks on the button`);
}

const paragraph1 = $("<p>Dashboard data for the students</p>");
const button1 = $("<button>Click here to get started</button>");
button1.on('click', _.debounce( updateCounter, 500, { leading: true, trailing: false }));
const paragraph2 = $("<p id='count'></p>");

$("body").append(paragraph1, paragraph2, button1);