# Creating Element in DOM 🚀🔥

## Understanding DOM Structure ✅🔥

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Craeting DOM Element</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="day">Monday</div>
      <div class="day">Tuesday</div>
      <div class="day">Wednesday</div>
      <div class="day">Thursday</div>
    </div>
  </body>

  <script>
    const parentElem = document.querySelector(".parent");
    // console.log(parentElem); // parent class
    console.log(parentElem.children); // HTML Collection
    console.log(parentElem.children[1].innerHTML); // Tuesday
  </script>
</html>
```

## Accessing Parent Element ✅

```javascript
const parentElem = document.querySelector(".parent");
// console.log(parentElem); // parent class
console.log(parentElem.children); // HTML Collection
console.log(parentElem.children[1].innerHTML); // Tuesday
```

### For Loop ✅

```javascript
const parentElem = document.querySelector(".parent");

for (let i = 0; i < parentElem.children.length; i++) {
  console.log(parentElem.children[i].innerHTML);
}
```

### Fetching Parent Element ✅

```javascript
const dayOne = document.querySelector(".day");
console.log(dayOne); // <div class="day">Monday</div>

// fetching parent element ✔️
console.log(dayOne.parentElement); // <div class="parent"></div>
```

### Fetching next sibling Element ✅

```javascript
const dayOne = document.querySelector(".day");
console.log(dayOne); // <div class="day">Monday</div>

// fetching next siblings ✔️
console.log(dayOne.nextElementSibling); // <div class="day">Tuesday</div>
```

**_Every Elements and Tags, including comments are NodeList. They will form a Complex DOM Tree Structure_**

```javascript
console.log("NODES :", parentElem.childNodes); // --> complex DOM tree structure (every element and tag, including comments are node list)
```

## Creating Element in DOM ✅🔥

```javascript
const div = document.createElement("div");
console.log(div); // <div></div>

div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "10px";

// div.innerText = "JavaScript DOM Manipulation";
const addText = document.createTextNode("JavaScript DOM Manipulation");
div.appendChild(addText);

document.body.appendChild(div);
```
