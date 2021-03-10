import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Payment("dani", "working on Typescript", 200);
// docTwo = new Invoice("zobi", "working on static website", 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
const form = document.querySelector(".new-item-form");
// input type
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//Events
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc = type.value === "invoice"
        ? new Invoice(tofrom.value, details.value, amount.valueAsNumber)
        : new Payment(tofrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, "end");
});
