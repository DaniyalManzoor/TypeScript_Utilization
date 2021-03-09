"use strict";
// Access Dom using to way
// 1 way
// const anchor = document.querySelector("a")!;
// 2 way
// if (anchor) {
//   console.log(anchor.href);
// }
// Type of Element
var form = document.querySelector(".new-item-form");
console.log(form.children);
// input type
var type = document.querySelector("#type");
var tofrom = document.querySelector("#toform");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
//Events
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
