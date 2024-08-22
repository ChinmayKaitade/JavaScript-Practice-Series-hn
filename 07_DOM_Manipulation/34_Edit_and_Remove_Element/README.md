# Edit and Delete Elements in DOM 🚀🔥

### _HTML Code ✅_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Edit and Delete Elements</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <ul class="language">
      <li>JavaScript</li>
    </ul>
  </body>
</html>
```

## _ADD ✅_

```javascript
// normal zindagi!! (unoptimized way) --> because of entire tree traversal
function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}
addLanguage("python");
addLanguage("typescript");

// mentos zindagi!! (optimized way)
function addOptiLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}
addOptiLanguage("goLang");
addOptiLanguage("cpp");
```

## _EDIT ✅_

```javascript
const secondLang = document.querySelector("li:nth-child(2)");
// secLang.innerHTML = "Mojo";
const newLi = document.createElement("li");
newLi.textContent = "Mojo";
secondLang.replaceWith(newLi);

// Edit
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";
```

## _DELETE ✅_

```javascript
const lastLang = document.querySelector("li:last-child");
lastLang.remove(); // cpp removed
```
