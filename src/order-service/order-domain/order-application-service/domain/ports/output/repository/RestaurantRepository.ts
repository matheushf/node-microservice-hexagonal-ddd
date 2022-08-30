import { Restaurant } from "~/order-service/order-domain/order-domain-core/domain/entity";

export interface RestaurantRepository {
    findRestaurantInformation(restaurant: Restaurant): Restaurant | undefined
}