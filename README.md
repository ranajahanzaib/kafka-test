# Kafka Test for META 1 Coin

Publish random 10,000 messages to Kafka and subscribe to them.

https://www.loom.com/share/234db9641a2649419c3cd4a376866db8

### Getting Started

Start containers

```bash
docker-compose up -d
```

Then, install dependencies:

```bash
yarn
# or "npm install"
```

#### Publish

```bash
yarn pub
# or "npm run pub"
# or "node publish.js"
```

#### Subscribe

```bash
yarn sub
# or "npm run sub"
# or "node subscribe.js"
```
