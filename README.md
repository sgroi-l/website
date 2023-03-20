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
- Dark/Light mode: Toggle to swith between dark and light mode. 

I spent a long time viewing different websites and studying the elements I liked and didn't like, as well as observing trends.

## Building

# Light/Dark Mode

I wanted to build a toggle to switch between a light and dark mode, this felt like a good tool to show some creativity and a useful way to learn more CSS as most of the CSS I'd used in projects upto this point had been more straightforward. I decided to make my switch from a checkbox `input` as this way I could have two modes, checked (light) and unchecked (dark).

I added a span to the container the `input` was inside, which I then styled by adding a background image that I made of a sun and a moon. When the label was checked I used CSS to move the span (`.slider`) left and right, which creates the effect of a switch being flicked.

I then used JavaScript to link this flicked switch to an event which changed the text colour, background image, hover colour of links etc.

The code adds an event listener to the `checkbox`. When it is clicked, the `darkMode function` is called.

The `darkMode` function toggles the `darkBod` class on the `body` element and the `whiteItem` and `whiteLink` classes on all `li` and `a` elements, respectively. It also sets the `isDarkMode` key in `localStorage` to the value of the `checked` property of the `checkbox`.

# Nav bar and  Burger



## Debugging

After building it's essential to test and debug the page to ensure it functions correctly. Here are some steps I followed when debugging the movie data page:

   - Validate the HTML and CSS code using a validator tool.
   - Check for errors in the JavaScript code using the console log.
   - Test the page on different browsers and devices to ensure it is responsive and works correctly.
   - Get feedback from others to identify any issues with the page.

I used the W3C validator and other validators to check that the page had valid HTML, CSS and conformed to WCAG 2.1 requirements. 


I  noticed that the click event which added classes to the card when they were selected wasn't always working when I clicked on a card. I added borders around every element on the card and also added `console.log` messages throughout my JavaScript in order to figure out where my code was becoming unresponsive. I realised that when I clicked on an area of the card which contained text the 'click' event wasn't being 'heard'. 

I changed my code and used `forEach` in order to add an event listener to each card on the page and the event now propagates as expected.









