const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_NAME, "root", null, {
  host: process.env.HOST,
  dialect: "mysql",
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();
