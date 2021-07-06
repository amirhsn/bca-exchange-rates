const express = require('express')
const app = express()
const response = require('./response');
 
app.get('/api', function (req, res) {
  response.response(res);
})
 
app.listen(443)