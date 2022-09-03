import { UUID } from "~/types/types";
import { Order } from "../../order-domain-core/domain/entity";
import { OrderDomainException } from "../../order-domain-core/domain/exception/OrderDomainException";
import { OrderDomainService } from "../../order-domain-core/domain/OrderDomainService";
import { CreateOrderCommand } from "./dto/create/CreateOrderCommand";
import { CreateOrderResponse } from "./dto/create/CreateOrderResponse";
import { OrderDataMapper } from "./mapper/OrderDataMapper";
import { OrderCreateHelper } from "./OrderCreateHelper";
import { OrderCreatedPaymentRequestMessagePublisher } from "./ports/output/message/publisher/payment/OrderCreatedPaymentRequestMessagePublisher";

export class OrderCreateCommandHandler {
  constructor(
    private orderDataMapper: OrderDataMapper,
    private orderCreateHelper: OrderCreateHelper,
    private orderCreatedPaymentRequestMessagePublisher: OrderCreatedPaymentRequestMessagePublisher
  ) {} 

  createOrder(createOrderCommand: CreateOrderCommand): CreateOrderResponse {
    const orderCreatedEvent =
      this.orderCreateHelper.persistOrder(createOrderCommand);

    console.log('Order is created with id: ', orderCreatedEvent.getOrder().getId().getValue())

    this.orderCreatedPaymentRequestMessagePublisher.publish(orderCreatedEvent);
    return this.orderDataMapper.orderToCreateOrderResponse(
      orderCreatedEvent.getOrder(), 'Saved!'
    );
  }
}
