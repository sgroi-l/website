# ReadmeFile: Website

## Overview

In this project I built a website using HTML, CSS, and JavaScript. The website is meant to showcase what I've learnt so far and to tell a little more about me and why I want to move into a career as a web developer. 

## Planning

Before starting the project, I decided what I wanted to include on the page. 

- Heading: A large heading.
- Content: Different sections to be split across 'pages' to break up the walls of text.
- Background: A choice of background images.
- Nav bar: Responsive nav bar and burger menu on small screens.
- Aside: An aside directing users to my other projects.
- Dark/Light mode: Toggle to switch between dark and light mode. 

I spent a long time viewing different websites and studying the elements I liked and didn't like, as well as observing trends.

## Building

### Light/Dark Mode

I wanted to build a toggle to switch between a light and dark mode, this felt like a good tool to show some creativity and a useful way to learn more CSS as most of the CSS I'd used in projects upto this point had been more straightforward. I decided to make my switch from a checkbox `input` as this way I could have two modes, checked (light) and unchecked (dark).

I added a span to the container the `input` was inside, which I then styled by adding a background image that I made of a sun and a moon using GIMP. When the label was checked I used CSS to move the span (`.slider`) left and right, which creates the effect of a switch being flicked.

I then used JavaScript to link this flicked switch to an event which changed the text colour, background image, hover colour of links etc. I checked the contrast levels of the background images and text colour to ensure that the website remains accessible to people with visual impairments.

The code adds an event listener to the `checkbox`. When it is clicked, the `darkMode` function is called.

The `darkMode` function toggles the `.darkBod` class on the `body` element and the `.whiteItem` and `.whiteLink` classes on all `li` and `a` elements respectively. It also sets the `isDarkMode` key in `localStorage` to the value of the `checked` property of the `checkbox`.

### Nav bar and  Burger

The nav bar is displayed as a three column grid at the top right of the page, it has styling applied to it so that each cell acts like a link to another page, in fact it just displays and hides content on the page using a switch statement in the JavaScript file.

On smaller screens we hide the grid nav bar and display a burger menu instead. The menu itself is made from two `spans` with a white background. I added a rotation transformation to the spans, which turns the burger menu into an 'X' when clicked. I found it easier to create a second navigation bar for the burger menu and to hide the other depending on screen size, though best practice would be to manipulate the layout of the bar.

## Debugging

On page reload the dark/light mode wasn't persisting. So if you had changed the mode, it would reset to light again on refresh. This wasn't a big problem but the slider wasn't resetting its position which made the two out of sync. I used a combination of friends, stack exchange and chatGPT to figure out that I could store a reference to the dark/light mode in my browser. 

Using the MDN web docs page on Window.LocalStorage as a reference, I managed to fix this bug. The JavaScript checks if the element with ID “darkModeToggle” is checked and sets a local storage item called “isDarkMode” to true if it is. When the page loads, the code checks if a local storage item called “isDarkMode” is set to true. If it is, it adds classes to elements as in the dark mode state.








