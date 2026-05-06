require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");
const port = 3030;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const logger = require("./middleware/logger");
app.use(logger);

//db
connectDb();

//Routes

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.get("/", (req, res) => {
  res.send("Api Running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
