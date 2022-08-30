import { PaymentResponse } from "~/order-service/order-domain/order-application-service/domain/dto/message/PaymentResponse";

export interface PaymentResponseMessageListener {
    paymentCompleted(paymentResponse: PaymentResponse): void;
    paymentCancelled(paymentResponse: PaymentResponse): void;
}