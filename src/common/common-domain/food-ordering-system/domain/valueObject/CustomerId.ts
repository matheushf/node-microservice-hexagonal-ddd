import { UUID } from "../../../../../types/types";
import { BaseId } from "./BaseId";

export class CustomerId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
