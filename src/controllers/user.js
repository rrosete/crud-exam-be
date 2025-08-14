const userService = require("../services/user");

const userController = {
  createUser: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      const data = await userService.createUser({
        firstName,
        lastName,
        email,
        password,
      });
      return res.json({ success: true, data });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const data = await userService.getUsers();
      return res.json({ success: true, data });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  getUserId: async (req, res) => {
    try {
      const { id } = req.params;

      const data = await userService.getUserId(id);
      return res.json({ success: true, data });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id, firstName, lastName } = req.params;
      const data = await userService.updateUser(id, {
        firstName,
        lastName,
      });
      return res.json({ success: true, data });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await userService.deleteUser(id);
      return res.json({ success: true, data });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
};

module.exports = userController;
