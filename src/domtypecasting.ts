// Access Dom using to way
// 1 way
// const anchor = document.querySelector("a")!;

// 2 way
// if (anchor) {
//   console.log(anchor.href);
// }

// Type of Element
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// input type
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#toform") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//Events
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
