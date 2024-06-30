const express = require("express");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel } = require("./models/usersSchema");
const { FurnitureModel } = require("./models/furnitureSchema"); // Assuming this is the correct path
require("./db/conn");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
const JWT_SECRET = "123abcd456";
const numSaltRounds = 8;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.post("/signup", async (req, res) => {
  const { name, email, password, profilePicture } = req.body; // Ensure profilePicture is included
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists. Please login.",
        status: "Fail",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, numSaltRounds);
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      profilePicture, // Save profilePicture
    });

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "User created successfully",
      status: "Success",
      token,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user", status: "Fail" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }

    const correctPass = await bcryptjs.compare(password, user.password);
    if (correctPass) {
      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "User Logged In Successfully", token });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "User not authenticated" });
  }
});

// Get furniture route
app.get("/furniture", async (req, res) => {
  try {
    const furniture = await FurnitureModel.find();
    res.json(furniture);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post furniture route
app.post("/furniture", async (req, res) => {
  const furniture = new FurnitureModel(req.body);
  try {
    await furniture.save();
    res.status(201).json({ success: success });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
