const express = require('express');

const app = express();
const RouteAPI = require("./routes/routeAPI.route");

app.use(express.json())
app.use('/api/v1/users',  RouteAPI);
app.use('/api/v1/auth',  RouteAPI);





module.exports = app;