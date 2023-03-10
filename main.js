let darkButton = document.querySelector('#darkModeToggle');
darkButton.addEventListener('click', darkMode);

function darkMode() {
  let lightDark = document.body;
  lightDark.classList.toggle("darkBod");
  let listItems = document.querySelectorAll('li');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("whiteItem");
  }
  let links = document.querySelectorAll('a');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("whiteLink");
  }
  let isChecked = document.querySelector('#darkModeToggle').checked;
  localStorage.setItem('isDarkMode', isChecked);
}

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

function handleClick(event) {
  switch (event.target) {
    case about:
      aboutMe.style.display = "block";
      why.style.display = "none";
      third.style.display = "none";
      console.log('hello');
      break;
    case whyFAC:
      why.style.display = "block";
      aboutMe.style.display = "none";
      third.style.display = "none";
      break;
    case contact:
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



/* const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
}); */