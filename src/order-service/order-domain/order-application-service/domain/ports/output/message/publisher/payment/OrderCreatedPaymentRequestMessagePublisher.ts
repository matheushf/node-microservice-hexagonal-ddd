import { DomainEventPublisher } from "~/common/common-domain/food-ordering-system/domain/event/publisher/DomainEventPublisher";
import { OrderCreatedEvent } from "~/order-service/order-domain/order-domain-core/domain/event";

export interface OrderCreatedPaymentRequestMessagePublisher
  extends DomainEventPublisher<OrderCreatedEvent> {}
