export class Invoice {
    constructor(c, d, a) {
        this.amount = a;
        this.client = c;
        this.details = d;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
