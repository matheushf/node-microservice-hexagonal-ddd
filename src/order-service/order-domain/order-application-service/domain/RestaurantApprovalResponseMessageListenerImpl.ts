import { RestaurantApprovalResponse } from "./dto/message/RestaurantApprovalResponse";
import { RestaurantApprovalResponseMessageListener } from "./ports/input/message/listener/restaurantapproval/RestaurantApprovalResponseMessageListener";

export class RestaurantApprovalResponseMessageListenerImpl implements RestaurantApprovalResponseMessageListener {
    orderApproved(restaurantApprovalResponse: RestaurantApprovalResponse): void {
        
    }

    orderRejected(restaurantApprovalResponse: RestaurantApprovalResponse): void {
        
    }
}