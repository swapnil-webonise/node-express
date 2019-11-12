const MongoClient = require('mongodb').MongoClient;
const appConstants = require('../constants/app-constants');

var dbConn = function() {
  return new Promise((resolve, reject) => {
      MongoClient.connect(appConstants.DB_URL,
      { useUnifiedTopology: true },
      function(err, client) {
        if(err){
            return reject(err);
        }else{
            var db = client.db('node-express')
            return resolve(db);
        }
      });
  });
}

exports.userList = function () {
  return dbConn().then(function(db) {
    return db.collection('users').find();
  })
  .catch(err => {
      console.log(err)
      res.send('Error');
  })
}

exports.getUser = function (userId) {
  return {
    userId,
    username: 'Swapnil Patil'
  }
}