import BaseEntity from "~/common/common-domain/food-ordering-system/domain/entity/BaseEntity";
import { Money } from "~/common/common-domain/food-ordering-system/domain/valueObject/Money";
import { ProductId } from "~/common/common-domain/food-ordering-system/domain/valueObject/ProductId";

export class Product extends BaseEntity<ProductId> {
  private name: String;
  private price: Money;

  constructor(productId: ProductId, name: String, price: Money) {
    super(productId);
    super.setId(productId);

    this.name = name;
    this.price = price;
  }

  public getName(): String {
    return this.name;
  }

  public setName(name: String): void {
    this.name = name;
  }

  public getPrice(): Money {
    return this.price;
  }

  public setPrice(price: Money): void {
    this.price = price;
  }
}
