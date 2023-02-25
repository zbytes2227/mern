// Require necessary packages and modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const auth = require("./functions/auth");
const PORT = process.env.PORT || 3030;

// Use necessary middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());

// Connect to MongoDB database
mongoose.connect(process.env.DB_KEY, () => {
  console.log("Connected to Database👾");
});

// Import and use necessary routers
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const { patch } = require("./routes/register");

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/logout", logoutRouter);

// serve the frontend
const path = require('path');

app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})


app.get("/", async (req, res) => {
  res.json({ msg: "Hello World(render)" });
});


// Handle requests to the dashboard rou
app.post("/api/dashboard", async (req, res) => {
  const isAuthenticated = await auth(req, res);
  res.json({ user_valid: isAuthenticated.verified });
});

// Handle requests to the user route
app.post("/api/user", async (req, res) => {
  const isAuthenticated = await auth(req, res);
  if (isAuthenticated.verified) {
    let user = await User.findOne({ _id: isAuthenticated.decoded._id });
    if (user) {
      res.json({ name: user.name });
    }
  }
});

// Start the server
app.listen(PORT, () => {
  console.log("Server status : Running👍🏻",PORT);
});
