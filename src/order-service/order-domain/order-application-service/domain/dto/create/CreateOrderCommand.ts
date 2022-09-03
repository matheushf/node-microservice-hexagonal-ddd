import { UUID } from "~/types/types";
import { OrderAddress } from "./OrderAddress";
import { OrderItemDTO } from "./OrderItemDTO";

export class CreateOrderCommand {
  constructor(
    private customerId: UUID,
    private restaurantId: UUID,
    private price: number,
    private items: OrderItemDTO[],
    private address: OrderAddress
  ) {}

  getCustomerId(): UUID {
    return this.customerId;
  }

  getRestaurantId(): UUID {
    return this.restaurantId;
  }

  getItems(): OrderItemDTO[] {
    return this.items;
  }

  getAddress(): OrderAddress {
    return this.address;
  }

  getPrice(): number {
    return this.price;
  }
}
