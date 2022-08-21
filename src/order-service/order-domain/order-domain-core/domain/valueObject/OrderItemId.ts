import { BaseId } from "~/common/common-domain/food-ordering-system/domain/valueObject/BaseId";

export class OrderItemId extends BaseId<number> {
  constructor(value: number) {
    super(value);
  }
}
