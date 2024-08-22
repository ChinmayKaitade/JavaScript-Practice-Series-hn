# DOM Selectors, NodeList and HTML Collections 🚀🔥

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Selectors</title>
    <style>
      body {
        background-color: #212121;
      }

      .bg-black {
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div class="bg-black">
      <h1 id="title" class="heading">
        DOM Learning on JavaScript
        <span style="display: none;">From YouTube</span>
      </h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <input type="password" />

      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  </body>
</html>
```

## DOM Selectors and Styling ✅

```javascript
document.getElementById("title").id;
// document.getElementById("title").class; // defined so we use className instead of using class
document.getElementsByClassName("heading");
document.querySelector("h1"); // gives first "h1" from entire HTML
document.querySelectorAll("h2"); // gives all "h2" elements from entire HTML
document.querySelector("#title"); // gives first "#title" id from entire HTML
document.querySelector(".heading"); // gives first ".heading" class from entire HTML
document.querySelector("input"); // gives first "input" tag from entire HTML
document.getElementsByClassName("heading").innerHTML = "DOM Manipulation";
document.getElementsByClassName("heading").getAttribute("id");
document.getElementsByClassName("heading").getAttribute("class");
document
  .getElementsByClassName("heading")
  .getAttribute("class", "text heading"); // for replacing class
// const title = document.getElementById("title"); // accessing title
const title = document.getElementById("title");
title.style.backgroundColor = "green"; // changing backgroundColor to "green"
title.style.color = "red"; // changing text color to "red"
title.style.padding = "10px"; // adding padding of "10px"
title.style.borderRadius = "15px"; // adding borderRadius of "15px"

// innerHTML, innerText and textContent
//innerHTML ✔️
document.getElementById("title").innerHTML; // it gives entire HTML value with tags and classes, gives entire element same as written in HTML
// innerText ✔️
document.getElementById("title").innerText; // it shows the visible text present on the screen
// textContent ✔️
document.getElementById("title").innerText; // it shows all text visible and hidden both that was present in the DOM
```

## Better Understanding querySelector and querySelectorAll ✅

```javascript
const myUl = document.querySelector("ul");
const turnGreen = myUl.querySelector("li");

turnGreen.style.backgroundColor = "green";
turnGreen.style.padding = "10px";
turnGreen.style.borderRadius = "15px";
turnGreen.innerText = "background color changed";
```

## Changing Style of NodeList ✅

```javascript
const tempLiList = document.querySelectorAll("li");
tempLiList.style.backgroundColor = "green"; // TypeError: Cannot set properties...because it is nodeList so we can't handle it like this
tempLiList[0].style.backgroundColor = "green"; // changes backgroundColor of first child to "green"
tempLiList[1].style.backgroundColor = "red"; // changes backgroundColor of second child to "red"
tempLiList[2].style.backgroundColor = "orange"; // changes backgroundColor of third child to "orange"
```

### ⭐ IMPORTANT NOTE -

- Whenever we have to change the styling of the NodeList we can't change it directly. First select the element using querySelectorAll and then access their index where we have to apply styling and then apply styling to it.

## for-each on NodeList ✅

```javascript
const tempLiList = document.querySelectorAll("li");

tempLiList.forEach((l) => {
  l.style.backgroundColor = "green";
}); // "li" element backgroundColor changed to green
```

## Converting HTML Collection to Array for accessing Arrays Properties ✅

```javascript
const tempClassList = document.getElementsByClassName("list-item");
tempClassList; // HTML Collection
const myConvertedArray = Array.from(tempClassList);

myConvertedArray.forEach((li) => {
  li.style.color = "orange";
}); // // "li" element text color changed to orange
```
