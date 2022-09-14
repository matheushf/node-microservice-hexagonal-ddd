import { SchemaRegistry, SchemaType } from "@kafkajs/confluent-schema-registry";
import avro from "avsc";

export class DateType extends avro.types.LogicalType {
  _fromValue(val: string) {
    return new Date(val);
  }
  _toValue(date: Date): number {
    return +date;
  }
  _resolve(type: any) {
    if (avro.Type.isType(type, "long", "string", "logical:timestamp-millis")) {
      return this._fromValue;
    }
  }
}
