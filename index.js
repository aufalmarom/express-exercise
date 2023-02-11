const express = require('express');
const cors = require('cors');
const ProjectRoute = require('./routes/ProjectRoute.js');
const AuthRoute = require('./routes/AuthRoute.js');
const app = express();
app.use(cors());
app.use(express.json());
app.use(AuthRoute, ProjectRoute);

app.listen(9000, () => {
  console.log('Server up and running at localhost with port 9000');
});
