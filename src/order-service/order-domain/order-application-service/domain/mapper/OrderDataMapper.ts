import uuid from "uuid";
import {
  CustomerId,
  Money,
  OrderStatus,
  ProductId,
  RestaurantId,
} from "~/common/common-domain/food-ordering-system/domain/valueObject";
import {
  Order,
  OrderItem,
  Product,
  Restaurant,
} from "~/order-service/order-domain/order-domain-core/domain/entity";
import { StreetAddress } from "~/order-service/order-domain/order-domain-core/domain/valueObject";
import { TrackingId } from "~/order-service/order-domain/order-domain-core/domain/valueObject/TrackingId";
import { CreateOrderCommand } from "../dto/create/CreateOrderCommand";
import { CreateOrderResponse } from "../dto/create/CreateOrderResponse";
import { OrderAddress } from "../dto/create/OrderAddress";
import { OrderItemDTO } from "../dto/create/OrderItemDTO";
import { TrackOrderResponse } from "../dto/track/TrackOrderResponse";

export class OrderDataMapper {
  createOrderCommandToRestaurant(
    createOrderCommand: CreateOrderCommand
  ): Restaurant {
    return new Restaurant(
      new RestaurantId(createOrderCommand.getRestaurantId()),
      createOrderCommand
        .getItems()
        .map(
          (orderItem) => new Product(new ProductId(orderItem.getProductId()))
        ),
      false
    );
  }

  createOrderCommandToOrder(createOrderCommand: CreateOrderCommand): Order {
    return new Order(
      new CustomerId(createOrderCommand.getCustomerId()),
      new RestaurantId(createOrderCommand.getRestaurantId()),
      this.orderAddressToStreetAddress(createOrderCommand.getAddress()),
      new Money(createOrderCommand.getPrice()),
      this.orderItemsToOrderItemEntities(createOrderCommand.getItems()),
      [],
      OrderStatus.PENDING
    );
  }

  orderToCreateOrderResponse(
    order: Order,
    message: string
  ): CreateOrderResponse {
    return new CreateOrderResponse(
      order.getTrackingId()?.getValue() || "",
      order.getOrderStatus(),
      message
    );
  }

  orderToTrackOrderResponse(order: Order): TrackOrderResponse {
    return new TrackOrderResponse(
      order.getTrackingId()?.getValue() || "",
      order.getOrderStatus(),
      order.getFailureMessage()
    );
  }

  private orderItemsToOrderItemEntities(
    orderItems: OrderItemDTO[]
  ): OrderItem[] {
    return orderItems.map((orderItem) => {
      const productId = new ProductId(orderItem.getProductId());

      return new OrderItem(
        new Product(productId),
        orderItem.getQuantity(),
        new Money(orderItem.getPrice()),
        new Money(orderItem.getSubtotal())
      );
    });
  }

  private orderAddressToStreetAddress(orderAddress: OrderAddress) {
    return new StreetAddress(
      uuid.v4(),
      orderAddress.getStreet(),
      orderAddress.getPostalCode(),
      orderAddress.getCity()
    );
  }
}
