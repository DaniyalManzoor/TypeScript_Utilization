export class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    console.log(`${this.client} owns of $${this.amount} for ${this.details}`);
  }
}
