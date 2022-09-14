import avro from "avsc";
import type { Schema } from "avsc";
import { logicalTypes } from "./logical-types/logical-types";

const schema: Schema = {
  namespace: "com.food.ordering.system.kafka.order.avro.model",
  type: "record",
  name: "PaymentRequestAvroModel",
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
      name: "paymentOrderStatus",
      type: {
        type: "enum",
        name: "PaymentOrderStatus",
        symbols: ["PENDING", "CANCELLED"],
      },
    },
  ],
};

export const PaymentRequestSchema = avro.Type.forSchema(schema, {
  logicalTypes: logicalTypes,
});
