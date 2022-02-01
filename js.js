//Testing moment in console
const date = moment();
console.log(date.format("dddd, MMMM Do"));
//puts date and time on screen
$("#currentDay").text(date.format("[Hello, today is ]dddd, MMMM Do"));
$("#currentTime").text(date.format("[The current time is ]h:mma"));


//calendar format
