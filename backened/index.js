require("dotenv").config();

const express = require("express");
const colors = require("colors");
const authRoute = require("./routes/authRoute");
const connect_DB = require("./DB/db");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

// route;
app.use("/api/auth", authRoute); // auth route

connect_DB().then(() => {
  console.log(`DB connect Succesfully`);
  app.listen(port, () => {
    console.log(`Server Start at ${port}`.bgWhite.red);
  });
});
