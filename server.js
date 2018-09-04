const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//BodyParder Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server open on port ${port}`));
