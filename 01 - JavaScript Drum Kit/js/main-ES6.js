/*
 * 01- JS Audio Snare Kit
 * We're trying to capture the click event and play a certain sound for each key press
 *
 * Setup variables for:
 * 1) which key the user pressed on the keyboard (keyUserPressed)
 * 2) which HTML elements corresponds to the key pressed on the keyboard (keysMatchedInHTML)
 * 3) what the data-key attribute of the <kbd> element's parent is (keysDataKey)
 *
 * How do we start?
 * 
 * Capture the click event by using .onkeypress method of the document
 * .onkeypress method expects a function when invoked, so we supply audioClick() to it
 */

document.onkeypress = function(keyboardClickEvent) {
  
  // Figure out which key the user pressed on the keyboard
  // Get the actual letter of keyboard with .key and make sure it's lowercase with .toLowerCase() method
  var keyUserPressed = keyboardClickEvent.key.toLowerCase();
  
  /* For each key press, find the <kbd> HTML which contains the keyUserPressed
   * querySelectorAll returns a nodeList so we have to convert that to an array with Array.from
   */
  var keysMatchedInHTML = Array.from(document.querySelectorAll('kbd'));

 /*****
   * ES6 WAY
   * 1) We're using ES6 .filter to find the <kbd> element with the proper key
   * 2) theKeyES6 shows .filter working with exposed function and return keywords
   * 3) theKeyES6B shows .filter working with an arrow function
   */
  var theKeyES6 = keysMatchedInHTML.filter(function(keyMatchedInHTML) {
    return keyMatchedInHTML.textContent.toLowerCase() === keyUserPressed
  });

  var theKeyES6B = keysMatchedInHTML
    .filter((keyMatchedInHTML) => keyMatchedInHTML.textContent.toLowerCase() === keyUserPressed);
  
  // Now we can use the data-key found in keysDataKey to get the right audio file and play it
  // This is using a template literal. Note this $ is not jQuery but rather invokes a template literal in JS
  var playSound = document.querySelector(`audio[data-key="${theKeyES6B[0].parentNode.getAttribute('data-key')}"]`);
  playSound.currentTime = 0; // rewinds to start each time
  playSound.play();

}