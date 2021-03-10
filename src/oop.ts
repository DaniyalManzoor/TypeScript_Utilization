import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Payment("dani", "working on Typescript", 200);
// docTwo = new Invoice("zobi", "working on static website", 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

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

  let doc: HasFormatter =
    type.value === "invoice"
      ? new Invoice(tofrom.value, details.value, amount.valueAsNumber)
      : new Payment(tofrom.value, details.value, amount.valueAsNumber);
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
