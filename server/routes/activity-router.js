const express = require('express');
const Activity = require('../../db/entities/activity');
const router = express.Router();


router.get('/', (req, res) => {
  const { id } = req.body
  Activity.get(id)
    .then((data)=>{
      res.send(data)
    }).catch((err)=>{
      res.send(err)
    })
});


router.post('/', (req, res) => {
  const data = req.body;
  Activity.save(data)
  .then((data)=>{
    res.status(201)
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })

});

module.exports = router;
