import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Payment("dani", "working on Typescript", 200);
// docTwo = new Invoice("zobi", "working on static website", 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
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
    let doc = type.value === "invoice"
        ? new Invoice(tofrom.value, details.value, amount.valueAsNumber)
        : new Payment(tofrom.value, details.value, amount.valueAsNumber);
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
