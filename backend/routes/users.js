const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//! get list of users

router.get("/", async (req, res) => {
  const userList = await User.find().select("-passwordHash");
  /* If you'd like to only get certain fields, you can simply pass them 
     as parameters to the select function
     ? User.find().select("name phone email"); 
     this returns just the name, phone, and email of users 
  */

  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

//! get single user

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-passwordHash");

  if (!user) {
    res.status(500).json({ message: "User not found" });
  }
  res.status(200).send(user);
});

// ! post user

router.post("/", async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, salt),
  });

  user = await user.save();
  if (!user) return res.status(400).send("User cannot be registered");
  res.send(user);
});

// ! making sure that user is in the system based on their identifying element (this case the email)

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.secret;

  if (!user) {
    return res.status(400).send("This user has not been found");
  }

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
      },
      secret,
      { expiresIn: "1d" } // can change to 1w, 1m.. etc
    );

    res.status(200).send({ user: user.email, token: token });
  } else {
    res.status(400).send("Wrong Password");
  }
});

module.exports = router;
