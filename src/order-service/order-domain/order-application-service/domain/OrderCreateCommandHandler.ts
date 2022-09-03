import { UUID } from "~/types/types";
import { Order } from "../../order-domain-core/domain/entity";
import { OrderDomainException } from "../../order-domain-core/domain/exception/OrderDomainException";
import { OrderDomainService } from "../../order-domain-core/domain/OrderDomainService";
import { CreateOrderCommand } from "./dto/create/CreateOrderCommand";
import { CreateOrderResponse } from "./dto/create/CreateOrderResponse";
import { OrderDataMapper } from "./mapper/OrderDataMapper";
import { CustomerRepository } from "./ports/output/repository/CustomerRepository";
import { OrderRepository } from "./ports/output/repository/OrderRepository";
import { RestaurantRepository } from "./ports/output/repository/RestaurantRepository";

export class OrderCreateCommandHandler {
  constructor(
    private orderDomainService: OrderDomainService,
    private orderRepository: OrderRepository,
    private customerRepository: CustomerRepository,
    private restaurantRepository: RestaurantRepository,
    private orderDataMapper: OrderDataMapper
  ) {}

  createOrder(createOrderCommand: CreateOrderCommand): CreateOrderResponse {
    this.checkCustomer(createOrderCommand.getCustomerId());
    const restaurant = this.checkRestaurant(createOrderCommand);
    const order =
      this.orderDataMapper.createOrderCommandToOrder(createOrderCommand);

    const orderCreatedEvent = this.orderDomainService.validateAndInitiateOrder(
      order,
      restaurant
    );
    const orderResult = this.saveOrder(order);

    console.log("Order is created", orderResult.getId().getValue());

    return this.orderDataMapper.orderToCreateOrderResponse(orderResult, 'Saved!');
  }

  checkCustomer(customerId: UUID) {
    const customer = this.customerRepository.findCustomer(customerId);

    if (!customer?.getId()) {
      console.warn(
        "Could not find customer with customer id: {} " + customerId
      );
      throw new OrderDomainException(
        "Could not find customer with customer id: {} " + customerId
      );
    }
  }

  checkRestaurant(createOrderCommand: CreateOrderCommand) {
    const restaurant =
      this.orderDataMapper.createOrderCommandToRestaurant(createOrderCommand);
    const optionalRestaurant =
      this.restaurantRepository.findRestaurantInformation(restaurant);

    if (!optionalRestaurant?.getId()) {
      console.warn(
        "Could not find restaurant with restaurant id: {} " +
          createOrderCommand.getRestaurantId()
      );
      throw new OrderDomainException(
        "Could not find restaurant with restaurant id: {} " +
          createOrderCommand.getRestaurantId()
      );
    }

    return optionalRestaurant;
  }

  private saveOrder(order: Order): Order {
    const orderResult = this.orderRepository.save(order);

    if (!orderResult) {
      console.error("Could not save order!");
      throw new OrderDomainException("Could not save order!");
    }

    console.log("Order is saved with id: ", orderResult.getId().getValue());
    return orderResult;
  }
}
