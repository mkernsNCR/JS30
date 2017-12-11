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

  /****
   * ES5 WAY
   * 1) use a foreach to evaluate each array position of keysMatchedinHTML
   * 2) compare each array position to keyUserPressed
   * 3) use .push to get put matched array positions onto new array theKey (this is the value we want)
   */
  var theKeyES5 = [];
  keysMatchedInHTML.forEach(function(keyMatchedInHTML) {
    if (keyMatchedInHTML.textContent.toLowerCase() === keyUserPressed) {
      theKeyES5.push(keyMatchedInHTML);
    }
  });

  // Now, we can figure out what the data-key attribute of the parent of <kbd> is
  // .parentNode jumps up a DOM level and getAttribute does it's thing
  keysDataKey = theKeyES5[0].parentNode.getAttribute('data-key');
  
  // Now we can use the data-key found in keysDataKey to get the right audio file and play it
  document.querySelector('audio[data-key="' + keysDataKey + '"]').play();
}




