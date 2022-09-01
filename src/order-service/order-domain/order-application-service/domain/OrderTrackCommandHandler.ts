import { TrackOrderQuery } from "./dto/track/TrackOrderQuery";
import { TrackOrderResponse } from "./dto/track/TrackOrderResponse";

export class OrderTrackCommandHandler {
  trackOrder(trackOrderQuery: TrackOrderQuery): TrackOrderResponse {}
}
