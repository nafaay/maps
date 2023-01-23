const express = require('express');
const morgan = require('morgan');
const port = 1234;

const app = express();


app.listen(port, () => {
  console.log('Server listening at port: ' + port);
});