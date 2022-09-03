import { UUID } from "~/types/types";

export class TrackOrderQuery {
  constructor(private orderTrackingId: UUID) {}

  getOrderTrackingId(): UUID {
    return this.orderTrackingId;
  }
}
