const kafka = require("kafka-node");
const { KAFKA_CLUSTER, TOPIC_NAME } = require("./constants");

const client = new kafka.KafkaClient({ kafkaHost: KAFKA_CLUSTER });

const subscriber = new kafka.Consumer(client, [{ topic: TOPIC_NAME }]);
subscriber.on("message", (message) => console.log(message));
