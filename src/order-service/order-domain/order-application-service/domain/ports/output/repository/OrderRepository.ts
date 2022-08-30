import { Order } from "~/order-service/order-domain/order-domain-core/domain/entity";
import { TrackingId } from "~/order-service/order-domain/order-domain-core/domain/valueObject/TrackingId";

export interface OrderRepository {
  save(order: Order): Order;
  findByTrackingId(trackingId: TrackingId): Order | undefined
}
