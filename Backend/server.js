const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3001; // Choose any port you prefer

// MongoDB connection URI and JWT secret
const MONGO_URI = 'mongodb+srv://Dipen123:Dipen123Password@cluster0.qcvxet4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const JWT_SECRET = 'YOUR_SECRET_KEY';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profile: { type: Object, default: {} },
});

// User Model
const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(bodyParser.json());

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user or username already exists
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User or username already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();

  res.json({ success: true, message: 'User signed up successfully' });
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  }

  // Generate a JWT token
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ success: true, token, profile: user.profile });
});

// Update profile endpoint
app.post('/profile', async (req, res) => {
  const { email, profile } = req.body;

  // Find and update the user profile
  const user = await User.findOneAndUpdate({ email }, { profile }, { new: true });
  if (!user) {
    return res.status(400).json({ success: false, message: 'User not found' });
  }

  res.json({ success: true, message: 'Profile updated successfully', profile: user.profile });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
