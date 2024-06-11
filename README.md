# DevDynamics_Assignment

Using NodeJS and ExpressJS, this projec creates a basic Publisher-Subscriber notification system. This System allows subscribers to subscribe to topics, receive notifications and unsubscribe.

Features:
1. Subscribe
2. Notify
3. Unsubscribe

API Endpoints:
1. Subscribe
   URL : '/subscribe'
   Method : 'POST'
   Request Body:
   {
     "topicId": "topic1",
     "subscriberId": "user1
   }
   Response : 'Subscriber user1 subscribed to topic topic1.'

2. Notify
   URL : '/notify'
   Method : 'POST'
   Request Body:
   {
     "topicId": "topic1"
   }
   Response : 'Notification sent to subscribers user1,user2 for topic topic1.'

3. Unsubscribe
   URL : '/unsubscribe'
   Method : 'POST'
   Request Body:
   {
     "topicId": "topic1",
     "subscriberId": "user1
   }
   Response : 'Subscriber user1 unsubscribed from topic topic1.'

Edge Cases for API Testing:
1)A user tries to subscribe to a topic they are already subscribed to.
2)A user tries to unsubscribe from a topic they are not subscribed to.
3)Attempting to notify subscribers of a topic that has no subscribers.
4)The system receives requests with invalid or non-existent topic or subscriber IDs.
5)Different cases in topic or subscriber IDs (e.g., "Topic1" vs "topic1").
6)Multiple concurrent requests to subscribe or unsubscribe users to/from the same topic.
7)Attempt to unsubscribe a user after the topic has been deleted.
8)Attempt to notify subscribers of a non-existent topic.
9)A topic has an extremely large number of subscribers.
10)Requests with empty bodies or missing required fields.


Run the server : node server.js
Server will start on 3000 port.

Used Postman for API Testing:
Created Collection
Added the data in JSON format
Exectued the method
Imported the json file of collections

Hosted the application on Render

Live Link : https://devdynamics-assignment-da5z.onrender.com
   
