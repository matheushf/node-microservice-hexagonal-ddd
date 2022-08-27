import { PaymentStatus } from "~/common/common-domain/food-ordering-system/domain/valueObject";

export class PaymentResponse {
    constructor(
        private id: string,
        private sagaId: string,
        private orderId: string,
        private paymentId: string,
        private customerId: string,
        private price: number,
        private createdAt: string,
        private paymentStatus: PaymentStatus,
        private failureMessages: string[]
    ) {}
}