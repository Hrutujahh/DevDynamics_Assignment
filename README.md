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

Run the server : node server.js
Server will start on 3000 port.

Used Postman for API Testing:
Created Collection
Added the data in JSON format
Exectued the method
Imported the json file of collections

Hosted the application on Render

Live Link : https://devdynamics-assignment-da5z.onrender.com
   
