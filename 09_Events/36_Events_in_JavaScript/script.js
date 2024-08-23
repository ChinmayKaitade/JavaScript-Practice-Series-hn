// attachEvent() --> used in early days, and not used now
// jQuery - on --> used in jQuery in early days

document.getElementById("owl").onclick = function () {
  alert("owl clicked");
}; // onClick - gives less features than addEventListener

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("owl clicked");
    e.stopPropagation();
  },
  false
); // default it is `false`, here third parameter "false" or "true" is used for event capturing and false is used for event bubbling

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
);

// Event Propagation ✅
// - Event Propagation is all about bubbling. bubble will go from bottom to top that is from child to parent.
// - false --> used for event bubbling (bottom to top --> from child to parent)
// - true --> used for event capturing (top to bottom --> from parent to child)

// Important Events to Learn ✅
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY (Interview Perspective)
// altkey, ctrlkey, shiftkey, keyCode (keyboard keys press events)

// stopPropagation ✅
// - `e.stopPropagation()` it will stop event bubbling in all cases

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
  },
  false
); // now it will not go on the google.com, as `e.stopPropagation()` is active so event bubbling is not happened

// Activity --> Remove the Image on Click
document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode; // method-1
    removeIt.remove();
    //removeIt.parentNode.removeChild(removeIt) // method-2
  }
});
