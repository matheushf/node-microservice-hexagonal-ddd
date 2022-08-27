import { UUID } from "~/types/types";

export class OrderItem {
  constructor(
    private productId: UUID,
    private quantity: number,
    private price: number,
    private subTotal: number
  ) {}
}
