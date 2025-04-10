require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors({
  origin: ["http://localhost:5173", "https://agriflow-frontend.vercel.app"],  // Add the correct frontend URL here
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

// Middleware
app.use(express.json());
// app.use(cors());


// Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Register User
app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = password;
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

// Login User
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
      console.log("Login attempt with email:", email);
  
      const user = await User.findOne({ email:email });
      if (!user) {
        console.log("User not found");
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const isMatch = password == user.password
      if (!isMatch) {
        console.log("Password does not match");
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
      console.log("Login successful");
      res.json({ token : token, userId: user._id });
    } catch (error) {
      console.error("Error during login:", error);  // Add detailed error logging
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  
  
