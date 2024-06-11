class PubSubSystem {
  constructor() {
    this.topics = {};
  }

  subscribe(topicId, subscriberId) {
    if (!this.topics[topicId]) {
      this.topics[topicId] = new Set();
    }
    this.topics[topicId].add(subscriberId);
    return `Subscriber ${subscriberId} subscribed to topic ${topicId}.`;
  }

  notify(topicId) {
    if (this.topics[topicId]) {
      const subscribers = Array.from(this.topics[topicId]);
      return `Notification sent to subscribers ${subscribers.join(
        ", "
      )} for topic ${topicId}.`;
    } else {
      return `No subscribers for topic ${topicId}.`;
    }
  }

  unsubscribe(topicId, subscriberId) {
    if (this.topics[topicId] && this.topics[topicId].has(subscriberId)) {
      this.topics[topicId].delete(subscriberId);
      if (this.topics[topicId].size === 0) {
        delete this.topics[topicId];
      }
      return `Subscriber ${subscriberId} unsubscribed from topic ${topicId}.`;
    } else {
      return `Subscriber ${subscriberId} not found in topic ${topicId}.`;
    }
  }
}

module.exports = PubSubSystem;
