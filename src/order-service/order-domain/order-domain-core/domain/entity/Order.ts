import uuid from "uuid";
import { AggregateRoot } from "~/common/common-domain/food-ordering-system/domain/entity/AggregateRoot";
import { OrderStatus } from "~/common/common-domain/food-ordering-system/domain/valueObject";
import { CustomerId } from "~/common/common-domain/food-ordering-system/domain/valueObject/CustomerId";
import { Money } from "~/common/common-domain/food-ordering-system/domain/valueObject/Money";
import { OrderId } from "~/common/common-domain/food-ordering-system/domain/valueObject/OrderId";
import { RestaurantId } from "~/common/common-domain/food-ordering-system/domain/valueObject/ResutaurantId";
import { OrderDomainException } from "../exception/OrderDomainException";
import { OrderItemId } from "../valueObject";
import { StreetAddress } from "../valueObject/StreetAddress";
import { TrackingId } from "../valueObject/TrackingId";
import { OrderItem } from "./OrderItem";

export class Order extends AggregateRoot<OrderId> {
  constructor(
    private customerId: CustomerId,
    private restaurantId: RestaurantId,
    private deliveryAddress: StreetAddress,
    private price: Money,
    private items: OrderItem[],
    private trackingId?: TrackingId,
    private orderStatus?: OrderStatus,
    private failureMessages?: String[]
  ) {
    super("0" as unknown as OrderId);
  }

  public initializeOrder() {
    this.setId(new OrderId(uuid.v4()));
    this.trackingId = new TrackingId(uuid.v4());
    this.orderStatus = OrderStatus.PENDING;
  }

  public validateOrder() {
    this.validateInitialOrder();
    this.validateTotalPrice();
    this.validateItemsPrice();
  }

  public pay() {
    if (this.orderStatus != OrderStatus.PENDING) {
      throw new OrderDomainException(
        "Order is not in correct state for pay operation!"
      );
    }

    this.orderStatus = OrderStatus.PAID;
  }

  public approve() {
    if (this.orderStatus != OrderStatus.PAID) {
      throw new OrderDomainException(
        "Order is not in correct state for approve operation!"
      );
    }

    this.orderStatus = OrderStatus.APPROVED;
  }

  public initCancel(failureMessages: string[]) {
    if (this.orderStatus != OrderStatus.PAID) {
      throw new OrderDomainException(
        "Order is not in correct state for initCancel operation!"
      );
    }

    this.orderStatus = OrderStatus.CANCELLING;
    this.updateFailureMessages(failureMessages);
  }

  public cancel(failureMessages: string[]) {
    if (
      this.orderStatus == OrderStatus.CANCELLING ||
      this.orderStatus === OrderStatus.PENDING
    ) {
      throw new OrderDomainException(
        "Order is not in correct state for cancel operation!"
      );
    }

    this.orderStatus = OrderStatus.CANCELLED;
    this.updateFailureMessages(failureMessages);
  }

  private updateFailureMessages(failureMessages: string[]) {
    if (this.failureMessages && failureMessages) {
      this.failureMessages = [
        ...this.failureMessages,
        ...failureMessages.filter((value) => value),
      ];
    }

    if (!this.failureMessages) {
      this.failureMessages = failureMessages;
    }
  }

  private validateInitialOrder() {
    if (this.orderStatus || this.getId()) {
      throw new OrderDomainException(
        "Order is not in correct statoe for initialization!"
      );
    }
  }

  private validateTotalPrice() {
    if (!this.price || !this.price.isGreaterThanZero()) {
      throw new OrderDomainException("Total price must be greater than zero.");
    }
  }

  private validateItemsPrice() {
    const orderItemsTotal = this.items.reduce((acc, orderItem) => {
      return acc + orderItem.getSubTotal().getAmount();
    }, 0);

    if (orderItemsTotal != this.price.getAmount()) {
      throw new OrderDomainException(
        `Total price: ${this.price.getAmount()} is not equal to Order items total: ${orderItemsTotal}`
      );
    }
  }

  private validateItemPrice(orderItem: OrderItem) {
    if (!orderItem.isPriceValid()) {
      throw new OrderDomainException(
        `Order item price: ${orderItem
          .getPrice()
          .getAmount()} is not valid for product ${orderItem
          .getProduct()
          .getId()
          .getValue()}`
      );
    }
  }

  private initializeOrderItems() {
    let itemId = 1;

    for (const orderItem of this.items) {
      orderItem.initializeOrderItem(super.getId(), new OrderItemId(itemId++));
    }
  }

  public getCustomerId(): CustomerId {
    return this.customerId;
  }

  public getRestaurantId(): RestaurantId {
    return this.restaurantId;
  }

  public getDeliveryAddress(): StreetAddress {
    return this.deliveryAddress;
  }

  public getPrice(): Money {
    return this.price;
  }

  public getItems(): OrderItem[] {
    return this.items;
  }

  public getTrackingId(): TrackingId | undefined {
    return this.trackingId;
  }

  public getOrderStatus(): OrderStatus | undefined {
    return this.orderStatus;
  }

  public getFailureMessage(): String[] | undefined {
    return this.failureMessages;
  }
}
