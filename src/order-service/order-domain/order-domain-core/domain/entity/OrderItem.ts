import BaseEntity from "~/common/common-domain/food-ordering-system/domain/entity/BaseEntity";
import { Money } from "~/common/common-domain/food-ordering-system/domain/valueObject/Money";
import { OrderId } from "~/common/common-domain/food-ordering-system/domain/valueObject/OrderId";
import { OrderItemId } from "../valueObject/OrderItemId";
import { Product } from "./Product";

export class OrderItem extends BaseEntity<OrderItemId> {
  constructor(
    // private orderId: OrderId,
    private product: Product,
    private quantity: number,
    private price: Money,
    private subTotal: Money
  ) {
    super("0" as unknown as OrderItemId);
  }

  isPriceValid() {
    return (
      this.price.isGreaterThanZero() &&
      this.price.getAmount() === this.product.getPrice().getAmount() &&
      this.price.getAmount() * this.quantity === this.subTotal.getAmount()
    );
  }

  public initializeOrderItem(orderId: OrderId, orderItemId: OrderItemId) {
    // this.orderId = orderId;
    super.setId(orderItemId);
  }

  // public getOrderId(): OrderId {
  //   return this.orderId;
  // }

  // public setOrderId(orderId: OrderId): void {
  //   this.orderId = orderId;
  // }

  public getProduct(): Product {
    return this.product;
  }

  public setProduct(product: Product): void {
    this.product = product;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public getPrice(): Money {
    return this.price;
  }

  public setPrice(price: Money): void {
    this.price = price;
  }

  public getSubTotal(): Money {
    return this.subTotal;
  }

  public setSubTotal(subTotal: Money): void {
    this.subTotal = subTotal;
  }
}
