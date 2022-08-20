import { BaseId } from "./BaseId";

export class OrderId extends BaseId<string> {
  constructor(value: string) {
    super(value);
  }
}
