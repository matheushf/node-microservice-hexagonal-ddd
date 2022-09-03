import { PaymentResponse } from "./dto/message/PaymentResponse";
import { PaymentResponseMessageListener } from "./ports/input/message/listener/payment/PaymentResponseMessageListener";

export class PaymentResponseMessageListenerImpl
  implements PaymentResponseMessageListener
{
  paymentCancelled(paymentResponse: PaymentResponse): void {}

  paymentCompleted(paymentResponse: PaymentResponse): void {}
}
