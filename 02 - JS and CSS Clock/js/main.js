/*
 * 02- JS Clock
 * We're trying to make a clock work with a second, minute and hour hand
 * A weird, strange and new challenge for me and probably you as well.
 * 
 * MENTAL PROCESS START
 * How to begin thinking about something like this? 
 * Look at the HTML. We have so little, just three <div> clock hands on a clock face
 * Now consider how do we move things on a webpage. With modern CSS, animations, transitions and transforms.
 * And which moving thing allows an object to rotate around a central point? transform-origin: https://css-tricks.com/almanac/properties/t/transform-origin/
 * We need to set that up in our CSS...
 * But even better, now we have a mental basis for how to consider the problem - we want to animate three divs with transform-origin rotating 360 degrees.
 * 
 * STEPWISE THINKING
 * 1 - Get the time, in seconds minutes and hours because we have three clock hands moving independently
 * 2 - Figure out where to place each hand related to the current time
 * 3 - Move each second / minute / hour hand in increments of a circle's circumference (360 degrees)
 * 3b - We know the second and minute hands need to move in increments of 60, so 360/60 = 6 degrees per movement
 * 3c - The hour hand needs to move in increments of 12, so 360/12 = 30 degrees per movement
 * 4 - Update the current time every second
 *
 */

 // Set basic time variables for seconds, minutes and hours
 // Also setup a degree calculation for each transform to come
 var currentSecond, currentMinute, currentHour;
 var degreesSecond, degreesMinute, degreesHour;

 /*** 
  * Create a function that gets current time and moves the hands of the clock
  * Think about the steps we set out in the begining of this file...
  */
 function currentTime() {

  // SECONDS
  // First time we run the program, currentSecond is undefined, so we check for it to set the initial position of the second hand
  if (currentSecond === undefined) {

    // Get the current time in seconds by creating a new Date object (Date is a built-in JS object you can use)
    // We apply the getSeconds() method to the date object. `new` gives us access to built-in constructor of JS that produces the date() object
    currentSecond = new Date().getSeconds();

    /**** 
     * So how do we know where to put the second hand? We set the degrees we're going to move:
     * the second hand * 6, because 360 degree clockface divided into 60 segments is 6 degrees
     * We also know the arms sit at 9 o'clock so we have to offset that by 90 degrees to start
     * We then target the `transform-origin` and modify it
     * Using an ES6 template string to feed degrees in there - notice how we use ${} to define the string literal
     */
    degreesSecond = (currentSecond * 6) + 90;
    document.querySelector('.second-hand').style['transform'] = `rotate(${degreesSecond}deg)`;

  } 
  
  // Because we run the program every second, from here on we know we just have to add 6 degrees for every second the program runs
  else {
    // Again, use of a template literal
    document.querySelector('.second-hand').style['transform'] = `rotate(${degreesSecond += 6}deg)`;
    currentSecond = new Date().getSeconds();
  }

  // MINUTES
  // Use the same logic to the get the currentMinute for the first time
  if (currentMinute === undefined) {
    currentMinute = new Date().getMinutes();
    degreesMinute = (currentMinute * 6) + 90;
    document.querySelector('.min-hand').style['transform'] = `rotate(${degreesMinute}deg)`;
  } 
  // If we're at a new second, we need to update the position of the minute hand
  // Same logic - we know if we get to second zero, just move the minute hand 6 degrees from wherever it was
  else if (currentSecond === 0) {
    document.querySelector('.min-hand').style['transform'] = `rotate(${degreesMinute += 6}deg)`;
    currentMinute = new Date().getMinutes(); // keep telling time
  }

  // HOURS
  // Find initial hour position very similar to how we did seconds / minutes
  // Except 360/12 = 30 so we multiply the hour hand by 30
  if (currentHour === undefined) {
    currentHour = new Date().getHours();
    degreesHour = (currentHour * 30) + 90;
    document.querySelector('.hour-hand').style['transform'] = `rotate(${degreesHour}deg)`;
  }

  // We know if the minute gets back to 0, we jump the hour hand ahead 30 degrees
  else if (currentMinute === 0) {
    document.querySelector('.hour-hand').style['transform'] = `rotate(${degreesHour += 30}deg)`;
    currentHour = new Date().getHours(); // keep telling time
  }

  document.getElementById('timestamp').innerHTML = currentHour + ":" + currentMinute + ":" + currentSecond;
 }

 // Update currentTime every second
 setInterval(currentTime, 1000);