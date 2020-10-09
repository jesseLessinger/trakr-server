const express = require('express');
const Log = require('../../db/entities/log');
const router = express.Router();

router.get('/', (req, res) => {
  const data = req.body
  Log.get(data)
    .then((results)=>{
      res.send(results)
    }).catch((err)=>{
      res.send(err)
    })
});


router.post('/', (req, res) => {
  const data = req.body;
  Log.save(data)
  .then((data)=>{
    res.status(201)
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })

});

module.exports = router;
