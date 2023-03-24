// Selects the element with ID "darkModeToggle" and adds an event listener to it that calls the darkMode function when clicked
let darkButton = document.querySelector('#darkModeToggle');
darkButton.addEventListener('click', darkMode);

function darkMode() {
  // Selects the body element and toggles the "darkBod" class
  let lightDark = document.body;
  lightDark.classList.toggle("darkBod");
  
  // Selects all list items and toggles the "whiteItem" class for each one
  let listItems = document.querySelectorAll('li');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("whiteItem");
  }

  // Selects all links and toggles the "whiteLink" class for each one
  let links = document.querySelectorAll('a');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("whiteLink");
  }

  // Selects the element with ID "darkModeToggle" and checks if it is checked. If it is, sets a local storage item to true
  let isChecked = document.querySelector('#darkModeToggle').checked;
  localStorage.setItem('isDarkMode', isChecked);
}

// Checks if a local storage item called "isDarkMode" is set to true. If it is, adds classes to elements as in the dark mode state
if (localStorage.getItem('isDarkMode') === 'true') {
  document.body.classList.add('darkBod');
  let listItems = document.querySelectorAll('li');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.add("whiteItem");
  }
  let links = document.querySelectorAll('a');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("whiteLink");
  }

  // Sets the element with ID "darkModeToggle" to checked if local storage item is set to true and unchecked if false.
  document.querySelector('#darkModeToggle').checked = true;
} else {
  document.querySelector('#darkModeToggle').checked = false;
}

const about = document.querySelector('#about');
const aboutMe = document.querySelector('#me');
const whyFAC = document.querySelector('#whyFAC');
const why = document.querySelector('#why');
const contact = document.querySelector('#contact');
const third = document.querySelector('#third');
const about2 = document.querySelector('#about2');
const whyFAC2 = document.querySelector('#whyFAC2');
const contact2 = document.querySelector('#contact2');


function handleClick(event) {
  switch (event.target) {
    case about:
    case about2:
      aboutMe.style.display = "block";
      why.style.display = "none";
      third.style.display = "none";
      console.log('First case');
      break;
    case whyFAC:
    case whyFAC2:
      why.style.display = "block";
      aboutMe.style.display = "none";
      third.style.display = "none";
      break;
    case contact:
    case contact2:
      third.style.display = "block";
      why.style.display = "none";
      aboutMe.style.display = "none";
      break;
    default:
      break;
  }
};

about.addEventListener('click', handleClick);
whyFAC.addEventListener('click', handleClick);
contact.addEventListener('click', handleClick);
about2.addEventListener('click', handleClick);
whyFAC2.addEventListener('click', handleClick);
contact2.addEventListener('click', handleClick);



const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
});

var button = document.getElementById("burger");
var div = document.querySelector(".openBurger");

button.addEventListener("click", function() {
  div.classList.toggle("openBurger")
});