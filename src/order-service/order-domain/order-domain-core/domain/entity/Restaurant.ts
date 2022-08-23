import { AggregateRoot } from "~/common/common-domain/food-ordering-system/domain/entity";
import { RestaurantId } from "~/common/common-domain/food-ordering-system/domain/valueObject";
import { Product } from "./Product";

export class Restaurant extends AggregateRoot<RestaurantId> {
  private restaurantId: RestaurantId;
  private products: Product[];
  private active: boolean;

  constructor(
    restaurantId: RestaurantId,
    products: Product[],
    active: boolean
  ) {
    super(restaurantId);
    this.restaurantId = restaurantId;
    this.products = products;
    this.active = active;
  }

  public getProducts() {
    return this.products;
  }

  public isActive() {
    return this.active;
  }
}
