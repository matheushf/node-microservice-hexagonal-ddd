import { BaseId } from "~/common/common-domain/food-ordering-system/domain/valueObject";
import { UUID } from "~/types/types";

export class TrackingId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
