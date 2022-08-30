import { DomainEventPublisher } from "~/common/common-domain/food-ordering-system/domain/event/publisher/DomainEventPublisher";
import { OrderCancelledEvent } from "~/order-service/order-domain/order-domain-core/domain/event";

export interface OrderCancelledPaymentRequestMessagePublisher
  extends DomainEventPublisher<OrderCancelledEvent> {}
