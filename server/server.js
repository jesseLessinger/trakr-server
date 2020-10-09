const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const logger = require('./logging');
const PORT = process.env.PORT || 3000;

const activityRouter = require('./routes/activity-router');
const logRouter = require('./routes/log-router')

const db = require('../db/db-connection');



//middleware
app.use(bodyParser.json())
// app.use(logger);

  
//routes
app.use('/activity', activityRouter)
app.use('/logs', logRouter)



//sync db
db.sync({ force: false })
  .then((result) => {
    console.log('connected to datebase:', result.config.database);
  })
  .catch((err) => {
    console.log(err, '!!!!!!!!!!!!!');
  });

//run server  
app.listen(PORT, ()=>{
  console.log("trakr server listening on port", PORT)
})