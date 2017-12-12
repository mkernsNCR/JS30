/*
 * 02- JS Clock
 * We're trying to make a clock work with a second, minute and hour hand
 *
 * Setup a new Date object
 */

 // Set basic time variables for seconds, minutes and hours
 var currentSecond, currentMinute, currentHour;
 var degrees = 0;

 // Create a function that get the time in second
 function currentTime() {
  currentSecond = new Date().getSeconds();
  
  // Get second hand and adjust it's transform origin
  // Using an ES6 string literal to feed degrees in there, maybe this is right?
  document.querySelector('.second-hand').style.transform(`rotate(${degrees += 6}deg`);

  // Get current minute whenever we get to zero seconds or haven' gotten it the first time
  if (currentSecond === 0 || currentMinute === undefined) {
    currentMinute = new Date().getMinutes();
  }

  // Get the current hour whenever we get to zero minutes of haven't gotten hour yet
  if (currentMinute === 0 || currentHour === undefined) {
    currentHour = new Date().getHours();
  }

  console.log (currentHour + ":" + currentMinute + ":" + currentSecond);
 }

 // Update currentTime every second
 setInterval(currentTime, 1000);