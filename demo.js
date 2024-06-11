const PubSubSystem = require("./pubsub");

const pubsub = new PubSubSystem();

function runDemo() {
  console.log(pubsub.subscribe("topic1", "user1"));
  console.log(pubsub.subscribe("topic1", "user2"));
  console.log(pubsub.subscribe("topic2", "user3"));

  console.log(pubsub.notify("topic1"));

  console.log(pubsub.unsubscribe("topic1", "user1"));

  console.log(pubsub.notify("topic1"));

  console.log(pubsub.unsubscribe("topic1", "user3"));

  //Edge Cases
  console.log(pubsub.subscribe("topic1", "user1"));
  console.log(pubsub.notify("topic1"));
  console.log(pubsub.notify("topic3")); //no subscribers
  console.log(pubsub.unsubscribe("topic1", "user1")); // true
  console.log(pubsub.notify("topic1")); // ["user2"]
  console.log(pubsub.unsubscribe("topic1", "user3")); // user3 not subscribed to topic1
  console.log(pubsub.unsubscribe("topic3", "user1")); // topic3 does not exist
  console.log(pubsub.subscribe("", "user4")); //invalid topic ID
  console.log(pubsub.notify("")); //invalid topic ID
  console.log(pubsub.unsubscribe("", "user4")); //invalid topic ID

  console.log(pubsub.subscribe("topic4", "")); //invalid subscriber ID
  console.log(pubsub.unsubscribe("topic4", "")); //invalid subscriber ID

  console.log(pubsub.subscribe("Topic1", "User1")); //new subscription due to case difference
  console.log(pubsub.notify("topic1")); // "user2"
  console.log(pubsub.notify("Topic1")); //"user1"
}

runDemo();
