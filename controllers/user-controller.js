const userService = require('../services/user-service');

exports.login = function (req, res) {
  res.status(200).send({
    message: 'success',
  })
};

exports.getUsers = function (req, res) {
  return userService.userList().then((response) => {
    response.toArray((err, users) => {
      if (err) return console.log(err)

      if (!users.length) {
        res.status(404).send({
          message: 'Users not found'
        })
      }

      res.status(200).send({
        data: users,
        message: 'success',
      })
    })
  });
};

exports.getUserDetails = function (req, res) {
  const user = userService.getUser(req.params.id);

  if (!user) {
    res.status(404).send({
      message: 'User not found'
    })
  }

  res.status(200).send({
    data: user,
    message: 'success',
  })
};