const express = require("express");

const app = express();

app.use(express.json());

require("./database");

const userRouter = require("./src/routes/user");

app.use("/api/v1/user", userRouter);

app.listen(5000, () => console.log("Server is running"));
