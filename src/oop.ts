import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("zohaib", "work on the zohaib website", 250);
const invTwo = new Invoice("madusir", "work on the mudasir website", 300);

// console.log(invOne, invTwo);

// if i want to make a array on invoice
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);
