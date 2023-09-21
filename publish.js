const kafka = require("kafka-node");
const { KAFKA_CLUSTER, TOPIC_NAME } = require("./constants");

const messages = [
  "BTC/USD: $43,210.50 | +2.3% 🚀",
  "ETH/USD: $3,086.75 | +1.8% 🌟",
  "XRP/USD: $1.25 | -0.5% 🔻",
  "LTC/USD: $167.80 | +0.9% 📈",
  "ADA/USD: $2.45 | -1.2% 🔽",
  "DOT/USD: $29.40 | +2.1% 🚀",
  "LINK/USD: $26.75 | +1.5% 🌟",
  "XLM/USD: $0.44 | -0.3% 🔻",
  "DOGE/USD: $0.30 | +0.7% 📈",
  "BNB/USD: $389.20 | -0.9% 🔽",
];

const client = new kafka.KafkaClient({ kafkaHost: KAFKA_CLUSTER });
client.createTopics(
  [
    {
      topic: TOPIC_NAME,
      partitions: 1,
      replicationFactor: 3,
    },
  ],
  (error, data) => console.log(error, data)
);

const publisher = new kafka.Producer(client);

publisher.on("ready", () => {
  let sentMessages = 0;
  const totalMessages = 10000;

  const sendMessage = () => {
    if (sentMessages < totalMessages) {
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];
      publisher.send(
        [
          {
            topic: TOPIC_NAME,
            messages: randomMessage,
          },
        ],
        (error, data) => {
          if (error) {
            console.error("Error sending message:", error);
          } else {
            sentMessages++;
            console.log(
              `Messages: [${sentMessages}/${totalMessages}]: Sent message (${randomMessage})`
            );
          }
        }
      );
    } else {
      clearInterval(interval); // Stop the interval when all messages are sent
      publisher.close(() => {
        console.log("Producer closed.");
      });
    }
  };

  const interval = setInterval(sendMessage, 1); // Send 1,000 messages per second
});
