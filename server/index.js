"use strict";
let express = require('express');
let app = express();
let fs = require('fs');

// load .env file, converts content to process.env
// e.g. FOO=bar in .env => process.env.FOO === 'bar'
// do not put `.env` in repository !
let path = require('path')
let envFile = path.join(__dirname, '..', '.env');

let dotenv = require('dotenv');

if (fs.existsSync(envFile)) {
  dotenv.load();
} else {
  console.log("you can define " + envFile + " to set env var PORT or"
              + " MONGO_URI");
}

let mongo_url = process.env.MONGO_URI || process.env.MONGOHQ_URL ||
      process.env.MONGOLAB_URI || process.env.MONGOSOUP_URL;
let mongoose = require('mongoose');
if (!mongo_url){
  let mockgoose = require('mockgoose');
  mockgoose(mongoose);
  mockgoose.reset();
  mongo_url = 'mongodb://localhost/boilerplate';
}


let port = process.env.PORT || 3000;

let model = {
  page: {
    title: 'Mitril sample from server',
  },
  counter: {
    value: 42,
  }
}

app.get('/page', (req, res) => {
  res.send(model.page);
})

app.get('/counter', (req, res) => res.send(model.counter))







// connect to mongo server, then launch http server


mongoose.connect(mongo_url, (err) => {
  if (err)
    return console.log('Mongosse - connection error: ' + err);
  console.log('Mongoose - connected to %s', mongo_url);
})

mongoose.connection.once('open', () => {
  let server = app.listen(port, () => {
    let host = server.address().address,
        port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  })
})
