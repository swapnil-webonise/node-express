exports.requireAuthentication = function (req, res, next) {
  if (req.path) {
    next();
    return;
  }

  return res.status(401).send({
    status: 401,
    msg: 'Please login',
  });
};