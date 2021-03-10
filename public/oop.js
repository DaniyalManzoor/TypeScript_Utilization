"use strict";
var Invoice = /** @class */ (function () {
    //keyword public, private readonly
    //   1st ways
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    // 2nd ways
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        console.log(this.client + " owns of $" + this.amount + " for " + this.details);
    };
    return Invoice;
}());
var invOne = new Invoice("zohaib", "work on the zohaib website", 250);
var invTwo = new Invoice("madusir", "work on the mudasir website", 300);
// console.log(invOne, invTwo);
// if i want to make a array on invoice
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
