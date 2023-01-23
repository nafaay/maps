const express = require('express');
const morgan = require('morgan');
const port = 1234;

const app = express();

const usersRoute = require('./routes/users');
const mapsRoute = require('./routes/maps');
const markersRoute = require('./routes/markers');
const favouritesRoute = require('./routes/favourites');


app.use("/api/users", usersRoute);
app.use("/api/maps", mapsRoute);
app.use("/api/markers", markersRoute);
app.use("/api/favourites", favouritesRoute);


app.get("/api", (req, res) => {
  res.send('Hello from root api');
});


app.listen(port, () => {
  console.log('Server listening at port: ' + port);
});
