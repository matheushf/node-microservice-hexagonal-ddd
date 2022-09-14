import avro from "avsc";
import { DateType } from "./DateType";
import { UuidType } from "./UuidType";
import { AvroDecimal } from "@ovotech/avro-decimal";

export const logicalTypes = {
  "timestamp-millis": DateType,
  uuid: UuidType,
  decimal: AvroDecimal,
};
