import avro from "avsc";
import type { Schema } from "avsc";
import { logicalTypes } from "./logical-types/logical-types";

const schema: Schema = {
  namespace: "com.food.ordering.system.kafka.order.avro.model",
  type: "record",
  name: "PaymentResponseAvroModel",
  fields: [
    {
      name: "id",
      type: {
        type: "string",
        logicalType: "uuid",
      },
    },
    {
      name: "sagaId",
      type: {
        type: "string",
        logicalType: "uuid",
      },
    },
    {
      name: "paymentId",
      type: {
        type: "string",
        logicalType: "uuid",
      },
    },
    {
      name: "customerId",
      type: {
        type: "string",
        logicalType: "uuid",
      },
    },
    {
      name: "orderId",
      type: {
        type: "string",
        logicalType: "uuid",
      },
    },
    {
      name: "price",
      type: {
        type: "bytes",
        logicalType: "decimal",
        precision: 10,
        scale: 2,
      },
    },
    {
      name: "createdAt",
      type: {
        type: "long",
        logicalType: "timestamp-millis",
      },
    },
    {
      name: "paymentStatus",
      type: {
        type: "enum",
        name: "PaymentStatus",
        symbols: ["COMPLETED", "CANCELLED", "FAILED"],
      },
    },
    {
      name: "failureMessages",
      type: {
        type: "array",
        items: {
          type: "string",
        },
      },
    },
  ],
};

export const PaymentResponseSchema = avro.Type.forSchema(schema, {
  logicalTypes: logicalTypes,
});
