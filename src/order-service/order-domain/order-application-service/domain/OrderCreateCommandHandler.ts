import { UUID } from "~/types/types";
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
}
