import { OrderNotFoundException } from "../../order-domain-core/domain/exception/OrderNotFoundException";
import { TrackingId } from "../../order-domain-core/domain/valueObject/TrackingId";
import { TrackOrderQuery } from "./dto/track/TrackOrderQuery";
import { TrackOrderResponse } from "./dto/track/TrackOrderResponse";
import { OrderDataMapper } from "./mapper/OrderDataMapper";
import { OrderRepository } from "./ports/output/repository/OrderRepository";

export class OrderTrackCommandHandler {
  constructor(
    private orderDataMapper: OrderDataMapper,
    private orderRepository: OrderRepository
  ) {}

  trackOrder(trackOrderQuery: TrackOrderQuery): TrackOrderResponse {
    const orderResult = this.orderRepository.findByTrackingId(
      new TrackingId(trackOrderQuery.getOrderTrackingId())
    );

    if (!orderResult?.getId().getValue()) {
      console.log(
        "Could not find order with tracking id: {}",
        trackOrderQuery.getOrderTrackingId()
      );
      throw new OrderNotFoundException(
        `Could not find order with tracking id: {${trackOrderQuery.getOrderTrackingId()}}`
      );
    }

    return this.orderDataMapper.orderToTrackOrderResponse(orderResult);
  }
}
