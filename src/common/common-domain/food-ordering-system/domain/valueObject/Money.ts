export class Money {
  private amount: number;

  public static ZERO = new Money(0);

  constructor(amount: number) {
    this.amount = amount;
  }

  getAmount() {
    return this.amount;
  }

  public isGreaterThanZero() {
    return this.amount != null && this.amount > 0;
  }

  public isGreaterThan(money: Money) {
    return this.amount != null && this.amount > 0;
  }

  public add(money: Money): Money {
    return new Money(this.amount + money.getAmount());
  }

  subtract(money: Money): Money {
    return new Money(this.amount - money.getAmount());
  }

  setScale(amount: number) {
    return amount.toFixed(2);
  }
}
