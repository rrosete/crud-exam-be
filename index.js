const express = require("express");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./database");

const userRouter = require("./src/routes/user");

app.use("/api/v1/user", userRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running port ${port}`));
