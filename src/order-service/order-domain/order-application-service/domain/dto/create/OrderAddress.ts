export class OrderAddress {
  constructor(
    private street: string,
    private postalCode: string,
    private city: string
  ) {}

  getStreet() {
    return this.street;
  }

  getPostalCode() {
    return this.postalCode;
  }

  getCity() {
    return this.city;
  }
}
