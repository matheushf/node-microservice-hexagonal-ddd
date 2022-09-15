export class KafkaProducerException extends Error {
  constructor(public message: string) {
    super(message);
  }
}
