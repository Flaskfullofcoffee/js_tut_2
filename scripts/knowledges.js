var list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF list
var newItemLast = document.createElement('li'); // create a new element
var newTextLast = document.createTextNode('cream'); // create a text node & enter new text in parenthesis
newItemLast.appendChild(newTextLast); // add text (newTextFirst) to the element (newItemFirst)
list.appendChild(newItemLast); // add the element to the list

// ADD NEW ITEM TO START OF LIST
var newItemFirst = document.createElement('li'); // create a new element
var newTextFirst = document.createTextNode('kale'); // create a text node & enter new text in parenthesis
newItemFirst.appendChild(newTextFirst); // add text (newTextFirst) to the element (newItemFirst)
list.insertBefore(newItemFirst, list.firstChild); // add the element to the list

// SET ALL ITEMS CLASS TO COOL
var listItems = document.querySelectorAll('li');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.getElementById('title'); // selecting the h2 element
var headingText = heading.firstChild.nodeValue; // selecting the h2 text
var totalItems =listItems.length; // get the number of <li> elements
var newHeading = headingText + '<span class="bob">' + totalItems + '</span>'; // add new content
heading.innerHTML = newHeading;




////////////////////////////////////////////////////////////


// TRADITIONAL DOM EVENT HANDLERS
// DO NOT USE!!!!!!
// function checkUserName() {
//   var elMsg = document.getElementById('input');
//   if (this.value.length < 5) {
//     elMsg.textContent = 'Must be 5 characters';
//   } else {
//     elMsg.textContent = '';
//   }
// }
//
// var elUserName = document.getElementById('user');
// el.userName.onblur = checkUserName;


// EVENT LISTENERS
// EXAMPLE ---->
function checkUsername() {
  // code to check the length of username
}
var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);

function checkUsername() {
  var elMsg =document.getElementById('username');
  if (this.value.length < 5) {
    elMsg.textContent = 'Minimum of 5 letters';
  } else {
    elMsg.textContent = '';
  }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);

// USING PARAMETERS WITH EVENT LISTENERS
var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
  if (elUsername.value.length > minLength) {
    // set error message
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
  } else {
    elMsg.innerHTML = '';
  }
}

elUsername.addEventListener('blur', function() {
  checkUsername(5);
}, false);
