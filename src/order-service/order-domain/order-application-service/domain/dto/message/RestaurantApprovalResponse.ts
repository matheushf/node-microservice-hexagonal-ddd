import { OrderApprovalStatus } from "~/common/common-domain/food-ordering-system/domain/valueObject";
import { DateTime } from "~/types/types";

export class RestaurantApprovalResponse {
  constructor(
    private id: string,
    private sagaId: string,
    private orderId: string,
    private restaurantId: string,
    private createdAt: DateTime,
    private orderApprovalStatus: OrderApprovalStatus,
    private failureMessages: string[]
  ) {}
}
