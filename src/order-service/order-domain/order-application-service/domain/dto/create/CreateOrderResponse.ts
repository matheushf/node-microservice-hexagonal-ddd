import { OrderStatus } from "~/common/common-domain/food-ordering-system/domain/valueObject";
import { UUID } from "~/types/types";

export class CreateOrderResponse {
  constructor(
    private orderTrackingId: UUID,
    private orderStatus: OrderStatus,
    private message: string
  ) {}
}
