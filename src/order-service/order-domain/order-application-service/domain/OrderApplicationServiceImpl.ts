import { CreateOrderCommand } from "./dto/create/CreateOrderCommand";
import { CreateOrderResponse } from "./dto/create/CreateOrderResponse";
import { TrackOrderQuery } from "./dto/track/TrackOrderQuery";
import { TrackOrderResponse } from "./dto/track/TrackOrderResponse";
import { OrderCreateCommandHandler } from "./OrderCreateCommandHandler";
import { OrderTrackCommandHandler } from "./OrderTrackCommandHandler";
import { OrderApplicationService } from "./ports/input/service/OrderApplicationService";

export class OrderApplicationServiceImpl implements OrderApplicationService {
  constructor(
    private orderCreateCommandHandler: OrderCreateCommandHandler,
    private orderTrackCommandHandler: OrderTrackCommandHandler
  ) {}

  createOrder(createOrderCommand: CreateOrderCommand): CreateOrderResponse {
    return this.orderCreateCommandHandler.createOrder(createOrderCommand);
  }

  trackOrder(trackOrderQuery: TrackOrderQuery): TrackOrderResponse {
    return this.orderTrackCommandHandler.trackOrder(trackOrderQuery);
  }
}
