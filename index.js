const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const users = require("./routes/users");

connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => res.send("server is active"));

// use routes
app.use("/api/user", users);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

