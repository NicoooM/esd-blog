const express = require("express");
const errorMiddleware = require("./middlewares/error.middleware");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");

app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

app.use(errorMiddleware);

app.listen(3001, () => console.log("App listening on port 3001!"));
