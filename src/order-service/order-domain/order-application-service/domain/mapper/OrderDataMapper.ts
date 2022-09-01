import uuid from "uuid";
import {
  Money,
  ProductId,
  RestaurantId,
} from "~/common/common-domain/food-ordering-system/domain/valueObject";
import {
  Order,
  Product,
  Restaurant,
} from "~/order-service/order-domain/order-domain-core/domain/entity";
import { StreetAddress } from "~/order-service/order-domain/order-domain-core/domain/valueObject";
import { CreateOrderCommand } from "../dto/create/CreateOrderCommand";
import { OrderAddress } from "../dto/create/OrderAddress";
import { OrderItem } from "../dto/create/OrderItem";

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
        
    )
  }

  private orderItemsToOrderItemEntities(orderItems: OrderItem[]) {
    return orderItems.map((orderItem) => {
      const productId = new ProductId(orderItem.getProductId());

      return new OrderItem(
        new Product(productId),
        productId.getValue(),
        orderItem.getQuantity(),
        new Money(orderItem.getPrice()).getAmount(),
        new Money(orderItem.getSubtotal()).getAmount()
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
