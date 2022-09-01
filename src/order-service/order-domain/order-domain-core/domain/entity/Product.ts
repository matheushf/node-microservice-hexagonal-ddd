import BaseEntity from "~/common/common-domain/food-ordering-system/domain/entity/BaseEntity";
import { Money } from "~/common/common-domain/food-ordering-system/domain/valueObject/Money";
import { ProductId } from "~/common/common-domain/food-ordering-system/domain/valueObject/ProductId";

export class Product extends BaseEntity<ProductId> {
  constructor(
    private productId: ProductId,
    private name?: String,
    private price?: Money
  ) {
    super(productId);
    super.setId(productId);
  }

  public getName(): String | undefined {
    return this.name;
  }

  public getPrice(): Money | undefined {
    return this.price;
  }

  public updateWithConfirmedNameAndPrice(name: String, price: Money) {
    this.name = name;
    this.price = price;
  }
}
