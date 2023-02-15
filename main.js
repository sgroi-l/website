let darkButton = document.querySelector('input');
darkButton.addEventListener('click', darkMode);

function darkMode() {
  let lightDark = document.body;
  lightDark.classList.toggle("dark");
  let isChecked = document.querySelector('input').checked;
  localStorage.setItem('isDarkMode', isChecked);
}

if (localStorage.getItem('isDarkMode') === 'true') { 
  
  // When we save the value of the 'isDarkMode' key in local storage using the localStorage.setItem() method, we are actually converting the boolean value to a string before storing it.

  document.body.classList.add('dark');
  document.querySelector('input').checked = true;
} else {
  document.querySelector('input').checked = false;
}