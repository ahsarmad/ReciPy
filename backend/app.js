const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
const cors = require("cors");
const User = require("./models/User");
const usersRouter = require("./routers/User");

app.use("cors");
app.options("*,", cors());

const api = process.env.API_URL;

//Middleware -> allowing data to be understood by express
app.use(express.json());
app.use(morgan("tiny"));

//Routers
app.use(`${api}/users`, usersRouter);

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "test-db",
  })
  .then(() => {
    console.log("Connection to database successful...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
