"use strict";
// Access Dom using to way
// 1 way
// const anchor = document.querySelector("a")!;
// 2 way
// if (anchor) {
//   console.log(anchor.href);
// }
// Type of Element
const form = document.querySelector(".new-item-form");
console.log(form.children);
// input type
const type = document.querySelector("#type");
const tofrom = document.querySelector("#toform");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//Events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
