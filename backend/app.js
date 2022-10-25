const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
require("./User");

const api = process.env.API_URL;

//Middleware -> allowing data to be understood by express
app.use(express.json());
app.use(morgan("tiny"));

const User = mongoose.model("user");

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

// const productSchema = mongoose.Schema({
//   name: String,
//   image: String,
//   countInStock: Number,
// });

app.get("/", (req, res) => {
  res.send("welcome to node.js");
});

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("posted");
});

// const Product = mongoose.model("Product", productSchema);

// app.get(`${api}/users`, (req, res) => {
//   const product = {
//     id: 1,
//     name: "hair",
//     image: "some_url",
//   };
//   res.send(product);
// });

// app.post(`${api}/users`, (req, res) => {
//   const product = new Product({
//     name: req.body.name,
//     image: req.body.image,
//     countInStock: req.body.countInStock,
//   });

//   product
//     .save()
//     .then((createdProduct) => {
//       res.status(201).json(createdProduct);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//         success: false,
//       });
//     });
// });

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
