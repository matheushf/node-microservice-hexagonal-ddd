import { BaseId } from "~/common/common-domain/food-ordering-system/domain/valueObject/BaseId";
import { UUID } from "~/types/types";

export class StreetAddress extends BaseId<UUID> {
  private id: UUID;
  private street: String;
  private postalCode: String;
  private city: String;

  constructor(id: UUID, street: String, postalCode: String, city: String) {
    super(id);

    this.id = id;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
  }

  public getId(): UUID {
    return this.id;
  }

  public setId(id: UUID): void {
    this.id = id;
  }

  public getStreet(): String {
    return this.street;
  }

  public setStreet(street: String): void {
    this.street = street;
  }

  public getPostalCode(): String {
    return this.postalCode;
  }

  public setPostalCode(postalCode: String): void {
    this.postalCode = postalCode;
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): void {
    this.city = city;
  }
}
