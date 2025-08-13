const { getUsers } = require("../controllers/user");
const BadRequestException = require("../exception/badRequestException");
const { User } = require("../models/index");

const bcrypt = require("bcryptjs");

const userService = {
  createUser: async ({ firstName, lastName, email, password }) => {
    try {
      const findUser = await User.findOne({ where: { email } });

      if (findUser)
        throw new BadRequestException(`Email ${email} already exists`);

      const hashedPassword = await bcrypt.hash(password, 10);

      const data = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },

  getUsers: async () => {
    try {
      const data = await User.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  },

  // getUsers: () =>
  //   new Promise(async (resolve, reject) => {
  //     try {
  //       const data = await User.findAll();
  //       resolve(data);
  //     } catch (error) {
  //       reject(error);
  //     }
  //   }),
};

module.exports = userService;
