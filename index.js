const express = require("express");

const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.ORIGIN_API_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

require("./database");

const userRouter = require("./src/routes/user");

app.use("/api/v1/user", userRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running port ${port}`));
