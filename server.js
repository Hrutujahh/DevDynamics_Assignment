const express = require("express");
const bodyParser = require("body-parser");
const PubSubSystem = require("./pubsub");

const app = express();
const pubsub = new PubSubSystem();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post("/subscribe", (req, res) => {
  const { topicId, subscriberId } = req.body;
  const message = pubsub.subscribe(topicId, subscriberId);
  res.status(200).send(message);
});

app.post("/notify", (req, res) => {
  const { topicId } = req.body;
  const message = pubsub.notify(topicId);
  res.status(200).send(message);
});

app.post("/unsubscribe", (req, res) => {
  const { topicId, subscriberId } = req.body;
  const message = pubsub.unsubscribe(topicId, subscriberId);
  res.status(200).send(message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
