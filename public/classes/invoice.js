export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        console.log(`${this.client} owns of $${this.amount} for ${this.details}`);
    }
}
