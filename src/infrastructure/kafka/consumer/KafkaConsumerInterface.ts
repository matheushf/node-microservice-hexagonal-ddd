export interface KafkaConsumerInterface {
  receive(
    messages: [],
    keys: number[],
    partitions: number[],
    offsets: number[]
  ): void;
}
