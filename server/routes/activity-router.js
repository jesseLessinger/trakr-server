const express = require('express');
const Activity = require('../../db/entities/activity');
const router = express.Router();


router.get('/', (req, res) => {
  const { id } = req.body
  console.log("fetching activities")
  Activity.get(id)
    .then((data)=>{
      res.send(data)
    }).catch((err)=>{
      res.send(err)
    })
});


router.post('/', (req, res) => {
  const data = req.body;
  console.log("saving:", data)
  Activity.save(data)
  .then((results)=>{
    res.status(201)
    res.send(results)
  }).catch((err)=>{
    res.send(err)
  })

});

module.exports = router;
