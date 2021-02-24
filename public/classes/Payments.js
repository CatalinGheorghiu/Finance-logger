export class Payments {
    constructor(c, d, a) {
        this.amount = a;
        this.recipient = c;
        this.details = d;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
