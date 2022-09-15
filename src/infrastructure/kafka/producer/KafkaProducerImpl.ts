import { KafkaConfigData } from "../config-data/food-ordering-system/KafkaConfigData";
import { KafkaProducerConfigData } from "../config-data/food-ordering-system/KafkaProducerConfigData";
import { KafkaProducerException } from "./exception/KafkaProducerException";

export class KafkaProducerConfig {
  constructor(private kafkaTemplate: any) {}

  send(topicName: string, key: string, message: string, callback?: () => void) {
    console.log(`Sending message=${message} to topic=${topicName}`);

    try {
      const result = this.kafkaTemplate.send(topicName, key, message);
      // callback()
    } catch (error: any) {
      console.error(
        `Error on kafka producer with key=${key} message=${message} and exception=${error.message}`
      );
      throw new KafkaProducerException(
        `Error on kafka producer with key=${key} message=${message} and exception=${error.message}`
      );
    }
  }
}
