import { Order } from "./entity";
import { Restaurant } from "./entity/Restaurant";
import {
  OrderCancelledEvent,
  OrderCreatedEvent,
  OrderPaidEvent,
} from "./event";
import { OrderDomainException } from "./exception/OrderDomainException";
import { OrderDomainService } from "./OrderDomainService";

export class OrderDomainServiceImpl implements OrderDomainService {
  validateAndInitiateOrder(
    order: Order,
    restaurant: Restaurant
  ): OrderCreatedEvent {
    this.validateRestaurant(restaurant);
    this.setOrderProductInformation(order, restaurant);
    order.validateOrder();
    order.initializeOrder();

    return new OrderCreatedEvent(order, new Date().getTime().toString());
  }

  payOrder(order: Order): OrderPaidEvent {
    order.pay();
    console.log(`Order with id : ${order.getId().getValue()} is paid`);

    return new OrderPaidEvent(order, new Date().getTime().toString());
  }

  approveOrder(order: Order): void {
    order.approve();
    console.log(`Order with id: ${order.getId().getValue()} is approved`);
  }

  cancelOrderPayment(
    order: Order,
    failureMessages: string[]
  ): OrderCancelledEvent {
    order.initCancel(failureMessages);
    console.log(
      `Order payment is cancelling for order id: ${order.getId().getValue()}`
    );

    return new OrderCancelledEvent(order, new Date().getTime().toString());
  }

  cancelOrder(order: Order, failureMessages: string[]): void {
    order.cancel(failureMessages);
    console.log(`Order with id: ${order.getId().getValue()} is cancelled`);
  }

  private validateRestaurant(restaurant: Restaurant) {
    if (!restaurant.isActive()) {
      throw new OrderDomainException(
        `Restaurant with id  ${restaurant
          .getId()
          .getValue()} is currently not active!`
      );
    }
  }

  private setOrderProductInformation(order: Order, restaurant: Restaurant) {
    order.getItems().forEach((orderItem) =>
      restaurant.getProducts().forEach((restaurantProduct) => {
        const currentProduct = orderItem.getProduct();

        if (currentProduct.getId() === restaurantProduct.getId()) {
          currentProduct.updateWithConfirmedNameAndPrice(
            restaurantProduct.getName(),
            restaurantProduct.getPrice()
          );
        }
      })
    );
  }
}
