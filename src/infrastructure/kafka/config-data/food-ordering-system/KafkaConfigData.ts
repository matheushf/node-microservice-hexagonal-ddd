export class KafkaConfigData {
  constructor(
    private bootstrapServers: string,
    private schemaRegistryUrlKey: string,
    private schemaRegistryUrl: string,
    private numOfPartitions: number,
    private replicationFactor: string
  ) {}
}
