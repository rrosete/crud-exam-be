const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crud-exam", "root", null, {
  host: "localhost",
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
