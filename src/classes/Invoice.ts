import {HasFormatter} from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter{
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.amount = a;
    this.client = c;
    this.details = d;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}