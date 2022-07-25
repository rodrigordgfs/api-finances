const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8888;
app.use(bodyParser.json());

const controllers = require("./controllers");

app.use(cors());

app.use("/transactions", controllers.transaction);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Running on port ${port}!`));
