import avro from "avsc";
import type { Schema } from "avsc";
import { logicalTypes } from "./logical-types/logical-types";

const schema: Schema = {
  namespace: "com.food.ordering.system.kafka.order.avro.model",
  type: "record",
  name: "RestaurantApprovalResponseAvroModel",
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
      name: "restaurantId",
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
      name: "createdAt",
      type: {
        type: "long",
        logicalType: "timestamp-millis",
      },
    },
    {
      name: "orderApprovalStatus",
      type: {
        type: "enum",
        name: "OrderApprovalStatus",
        symbols: ["APPROVED", "REJECTED"],
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

export const RestaurantApprovalResponse = avro.Type.forSchema(schema, {
  logicalTypes: logicalTypes,
});
