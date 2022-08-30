import { CreateOrderCommand } from "../../../dto/create/CreateOrderCommand";
import { CreateOrderResponse } from "../../../dto/create/CreateOrderResponse";
import { TrackOrderQuery } from "../../../dto/track/TrackOrderQuery";
import { TrackOrderResponse } from "../../../dto/track/TrackOrderResponse";

export interface OrderApplicationService {
  createOrder(createOrderCommand: CreateOrderCommand): CreateOrderResponse;

  trackOrder(trackOrderQuery: TrackOrderQuery): TrackOrderResponse;
}
