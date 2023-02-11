const jwt = require('jsonwebtoken');

const db = require('../models');
const User = db.users;

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = await User.findOne({
      where: {
        username,
        password,
      },
    });
    if (data) {
      const token = jwt.sign(
        { username, password },
        'asdfYJNFadfjhfkasdfHKDJSFH'
      );
      await User.update(
        {
          token,
        },
        {
          where: {
            username,
            password,
          },
        }
      );
      res.status(200).json({ token });
    } else {
      res.status(404).json({ message: 'error credential' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const Logout = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(token);
    await User.update(
      {
        token: null,
      },
      {
        where: {
          token,
        },
      }
    );
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  Login,
  Logout,
};
