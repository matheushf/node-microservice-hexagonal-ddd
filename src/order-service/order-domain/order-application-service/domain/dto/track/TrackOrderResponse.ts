import { OrderStatus } from "~/common/common-domain/food-ordering-system/domain/valueObject";
import { UUID } from "~/types/types";

export class TrackOrderResponse {
  constructor(
    private orderTrackingId: UUID,
    private orderStatus: OrderStatus,
    private failureMessages: string[]
  ) {}
}
