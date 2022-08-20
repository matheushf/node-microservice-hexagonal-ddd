export class Money {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  getAmount() {
    return this.amount;
  }

  isGreaterThanZero() {
    return this.amount != null && this.amount > 0;
  }

  isGreaterThan(money: Money) {
    return this.amount != null && this.amount > 0;
  }

  add(money: Money): Money {
    return new Money(this.amount + money.getAmount());
  }

  subtract(money: Money): Money {
    return new Money(this.amount - money.getAmount());
  }

  setScale(amount: number) {
    return amount.toFixed(2);
  }
}
