// CRUD create read update delete

const mongodb = require('mongodb')
const { MongoClient, ObjectID } = mongodb

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log('Unable to connect to the database!');
  }

  console.log('Connected correctly!');
  const db = client.db(databaseName);

  // ********** Inserting Documents **********

  // db.collection('users').insertOne({
  //   name: 'Giang',
  //   age: 32
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user');
  //   }

  //   console.log(result.ops);
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Thanh',
  //     age: 29
  //   },
  //   {
  //     name: 'Phan',
  //     age: 23
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert users');
  //   }

  //   console.log(result.ops);
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Clean the house',
  //     completed: true
  //   },
  //   {
  //     description: 'Review inspection',
  //     completed: false
  //   },
  //   {
  //     description: 'Pot plants',
  //     completed: true
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks!');
  //   }

  //   console.log(result.ops);
  // })


  // ********** Querying Documents **********

  // find document(s)
  // db.collection('users').findOne({_id: new ObjectID('5c8c74ec3434bc441de3bf76')}, (error, user) =>{
  // db.collection('users').findOne({name: 'Giang'}, (error, user) =>{
  //   if (error) {
  //     console.log('Unable to fetch');
  //   }

  //   console.log(user);
  // })

  // find tasks
  // db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
  //   console.log(tasks)
  // })


  // ********** Updating Documents **********
  // const updatePromise = db.collection('users').updateOne({
  //   _id: new ObjectID("5c8c7aef2572a9466f11d423")
  // }, {
  //   $set: {
  //     name: 'GiangP',
  //     age: 29
  //   }
  // })

  // updatePromise.then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => {
  //   console.log(result.modifiedCount)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // ********** Deleting Documents **********
  // db.collection('users').deleteMany({
  //   age: 33
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('tasks').deleteOne({
  //   description: "Clean the house"
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
})
