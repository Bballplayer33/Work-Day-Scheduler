//Testing moment in console
const date = moment();
console.log(date.format("dddd, MMMM Do"));
//puts date and time on screen
$("#currentDay").text(date.format("[Hello, today is ]dddd, MMMM Do"));
$("#currentTime").text(date.format("[The current time is ]h:mma"));
//calendar format

$(".saveBtn")
console.log($(".saveBtn"))
function testFunction(name) {
    console.log(name)
}
testFunction("Adams")

var buttonArray = $(".saveBtn");
 for (let i = 0; i < buttonArray.length; i++) {
     //console.log(buttonArray[i]);
     var storageHr = i + 9  
     var savedLocal = localStorage.getItem("#hr" + storageHr); 
     var inputArea = "#hr" + storageHr    
    $(inputArea).val(savedLocal)
     console.log(localStorage.getItem("#hr" + storageHr));
     $(buttonArray[i]).click(function(event) {
         event.preventDefault();
        console.log(event.target.value);
        var hourId = "#" + event.target.value
        console.log($(hourId).val());
    var inputVal = $(hourId).val(); 
    localStorage.setItem(hourId , inputVal )

      });

 }
