const TOPIC_NAME = "meta1-coin-topic-x";

const kafkaBrokers = ["localhost:9093", "localhost:9094", "localhost:9095"];

const KAFKA_CLUSTER = kafkaBrokers.join(",");

module.exports = {
  KAFKA_CLUSTER,
  TOPIC_NAME,
};
