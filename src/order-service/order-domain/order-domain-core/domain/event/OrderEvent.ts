import { DomainEvent } from "~/common/common-domain/food-ordering-system/domain/event/DomainEvent";
import { Order } from "../entity";

export abstract class OrderEvent implements DomainEvent<Order> {
  private order: Order;
  private createdAt: String;

  constructor(order: Order, createdAt: String) {
    this.order = order;
    this.createdAt = createdAt;
  }

  public getOrder() {
    return this.order;
  }

  public getCreatedAt() {
    return this.createdAt;
  }
}
