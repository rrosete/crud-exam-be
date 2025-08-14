const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./database");

const userRouter = require("./src/routes/user");

app.use("/api/v1/user", userRouter);

app.listen(5000, () => console.log("Server is running"));
