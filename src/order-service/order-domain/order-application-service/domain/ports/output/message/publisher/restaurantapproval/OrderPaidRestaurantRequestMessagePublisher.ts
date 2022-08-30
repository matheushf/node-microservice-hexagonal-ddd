import { DomainEventPublisher } from "~/common/common-domain/food-ordering-system/domain/event/publisher/DomainEventPublisher";
import { OrderPaidEvent } from "~/order-service/order-domain/order-domain-core/domain/event";

export interface OrderPaidRestaurantRequestMessagePublisher
  extends DomainEventPublisher<OrderPaidEvent> {}
