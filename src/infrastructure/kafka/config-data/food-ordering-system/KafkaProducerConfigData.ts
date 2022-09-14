export class KafkaProducerConfigData {
  constructor(
    private keySerializerClass: string,
    private valueSerializerCLass: string,
    private compressionType: string,
    private acks: string,
    private batchSize: number,
    private batchSizeBoostFactor: number,
    private lingerMs: number,
    private requestTimeoutMs: number,
    private retryCount: number
  ) {}
}
