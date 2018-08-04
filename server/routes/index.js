const express = require('express');
const router = express.Router();
const editDistance = require('../edit').editDistance;


router.post('/', function(req, res, next) {
  let distance = editDistance(req.body.str1, req.body.str2)
  res.status(200)
        .json({
          status: 'success',
          str1: req.body.str1,
          str2: req.body.str2,
          distance
        })
});

module.exports = router;
