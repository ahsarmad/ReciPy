const User = require("../models/User");
const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
  const userList = await User.find();
  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

router.post(`/`, (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    picture: req.body.picture,
  });
  user
    .save()
    .then((data) => {
      //   console.log(data);
      //   res.send("success");
      res.status(201).json(data);
    })
    .catch((err) => {
      //   console.log(err);
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

module.exports = router;
