import { DomainEvent } from "~/common/common-domain/food-ordering-system/domain/event/DomainEvent";
import { Order } from "../entity";
import { OrderEvent } from "./OrderEvent";

export class OrderCreatedEvent extends OrderEvent {
  constructor(order: Order, createdAt: string) {
    super(order, createdAt);
  }
}
