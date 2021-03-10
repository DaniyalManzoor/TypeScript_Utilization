class Invoice {
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
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    console.log(`${this.client} owns of $${this.amount} for ${this.details}`);
  }
}

const invOne = new Invoice("zohaib", "work on the zohaib website", 250);
const invTwo = new Invoice("madusir", "work on the mudasir website", 300);

// console.log(invOne, invTwo);

// if i want to make a array on invoice
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);
