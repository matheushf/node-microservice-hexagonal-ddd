import avro from "avsc";
import type { Schema } from "avsc";
import { logicalTypes } from "./logical-types/logical-types";

const schema: Schema = {
  namespace: "com.food.ordering.system.kafka.order.avro.model",
  type: "record",
  name: "RestaurantApprovalRequestAvroModel",
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
      name: "restaurantOrderStatus",
      type: {
        type: "enum",
        name: "RestaurantOrderStatus",
        symbols: ["PAID"],
      },
    },
    {
      name: "products",
      type: {
        type: "array",
        items: {
          name: "Product",
          type: "record",
          fields: [
            {
              name: "id",
              type: {
                type: "string",
                logicalType: "uuid",
              },
            },
            { name: "quantity", type: "int" },
          ],
        },
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
  ],
};

export const RestaurantApprovalRequest = avro.Type.forSchema(schema, {
  logicalTypes: logicalTypes,
});
