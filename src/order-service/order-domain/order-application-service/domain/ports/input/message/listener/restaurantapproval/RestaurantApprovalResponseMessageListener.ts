import { RestaurantApprovalResponse } from "~/order-service/order-domain/order-application-service/domain/dto/message/RestaurantApprovalResponse";

export interface RestaurantApprovalResponseMessageListener {
    orderApproved(restaurantApprovalResponse: RestaurantApprovalResponse): void;
    orderRejected(restaurantApprovalResponse: RestaurantApprovalResponse): void;
}