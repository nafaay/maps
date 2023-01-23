const express = require('express');
const morgan = require('morgan');
const port = 1234;

const app = express();

const usersRoute = require('./routes/users');

app.use("/api/users", usersRoute);

app.get("/api", (req, res) => {
  res.send('Hello from root api');
});


app.listen(port, () => {
  console.log('Server listening at port: ' + port);
});
