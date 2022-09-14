import avro from "avsc";
import uuid from 'uuid';

export class UuidType extends avro.types.LogicalType {
  _fromValue(val: any) {
    return val;
  }
  _toValue(value: any) {
    return uuid.validate(value) ? value : undefined;
  }
  _resolve(type: any) {
    if (avro.Type.isType(type, "long", "string", "uuid")) {
      return this._fromValue;
    }
  }
}
