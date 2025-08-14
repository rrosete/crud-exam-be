const BadRequestException = require("../exception/badRequestException");
const NotFoundException = require("../exception/NotFoundException");
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

  getUserId: async (id) => {
    try {
      const data = await User.findByPk(id);
      if (!data) return reject(new Error("User not found!"));

      return data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (id, { firstName, lastName }) => {
    try {
      const user = await User.findOne({ where: { id } });
      if (!user) throw new NotFoundException("Not found user!");

      const data = await User.update(
        { lastName: lastName, firstName: firstName },
        {
          where: {
            id: id,
          },
        }
      );

      return data;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new NotFoundException("Not found user!");

      const data = await User.destroy({
        where: {
          id,
        },
      });

      return data;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userService;
