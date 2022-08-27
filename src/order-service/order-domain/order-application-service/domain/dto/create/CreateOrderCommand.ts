import { UUID } from "~/types/types";
import { OrderAddress } from "./OrderAddress";
import { OrderItem } from "./OrderItem";

export class CreateOrderCommand {
  constructor(
    private customerId: UUID,
    private restaurantId: UUID,
    private price: number,
    private items: OrderItem[],
    private address: OrderAddress
  ) {}
}
