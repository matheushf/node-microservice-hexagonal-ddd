export class KafkaConsumerConfigData {
  constructor(
    private keyDeserializer: string,
    private valueDeserializer: string,
    private autoOffsetReset: string,
    private specificAvroReaderKey: string,
    private specificAvroReader: string,
    private batchListener: boolean,
    private autoStartup: boolean,
    private concurrencyLevel: number,
    private sessionTemeoutMs: number,
    private heartbeatIntervalMs: number,
    private maxPollIntervalMs: number,
    private pollTimeoutMs: number,
    private maxPollRecords: number,
    private maxPartitionFetchBytesDefault: number,
    private maxPartitionFetchBytesBoostFactor: number
  ) {}
}
