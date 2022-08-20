import { UUID } from "../../../../../types/types";
import { BaseId } from "./BaseId";

export class RestaurantId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
