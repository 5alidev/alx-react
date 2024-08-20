import $ from "jquery";
const _ = require("lodash");

let count = 0;

const updateCounter = () => {
    count++;
    $("#count").text(`${count} clicks on the button`);
}

const paragraph1 = $("<p>Holberton Dashboard</p>");
const paragraph2 = $("<p>Dashboard data for the students</p>");
const button1 = $("<button>Click here to get started</button>");
button1.on('click', _.debounce( updateCounter, 500, { leading: true, trailing: false }));
const paragraph3 = $("<p id='count'></p>");
const paragraph4 = $("<p>Copyright - Holberton School</p>");

$("body").append(paragraph1, paragraph2, button1, paragraph3, paragraph4);