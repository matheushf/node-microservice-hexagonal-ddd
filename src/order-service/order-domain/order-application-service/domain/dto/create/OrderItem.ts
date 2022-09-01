import { Product } from "~/order-service/order-domain/order-domain-core/domain/entity";
import { UUID } from "~/types/types";

export class OrderItem {
  constructor(
    private product: Product,
    private productId: UUID,
    private quantity: number,
    private price: number,
    private subTotal: number
  ) {}

  getProductId(): UUID {
    return this.productId;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getPrice(): number {
    return this.price;
  }

  getSubtotal(): number {
    return this.subTotal;
  }
}
