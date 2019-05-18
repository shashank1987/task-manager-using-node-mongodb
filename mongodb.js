//CRUD
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client) => {
   if (error) {
     return console.log("Unable to connect to database!");
   }

   console.log("Connected Perfectly");
   const db = client.db(databaseName);

   // db.collection('users').insertOne({
   //   name:'Shashank Naik',
   //   age:32
   // }, (error,result) => {
   //     if (error) {
   //        return console.log("Unable to insert User!");
   //     }
   //
   //     console.log(result.ops);
   // });

   // db.collection('users').insertMany([
   //   {
   //     name: 'Deepika',
   //     age:30
   //   }, {
   //     name: 'Vijeta',
   //     age:59
   //   }
   // ], (error,result) => {
   //   if (error) {
   //          return console.log("Unable to insert documents in Users!");
   //   }
   //
   //   console.log(result.ops);
   //
   // });

   db.collection('tasks').insertMany([
     {
       description: 'Doing UI',
       completed:true
     }, {
       description: 'Sending Email to Client',
       completed:true
     }, {
       description: 'Doing Back End',
       completed:false
     }

   ], (error,result) => {
     if (error) {
            return console.log("Unable to insert documents!");
     }

     console.log(result.ops);

   });



});
