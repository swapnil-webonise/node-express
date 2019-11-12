const userRoutes = require('./users-routes');
const auth = require('../middlewares/authentication-middleware');
const authenticationRoutes = require('./authentication-routes');

const initRoutes = function (app) {
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Homepage',
      message: 'Nodejs with express'
    })
  });

  app.use('/', authenticationRoutes);

  app.use(auth.requireAuthentication);

  app.use('/users', userRoutes);

  app.get('*', function (req, res) {
    res.json({
      msg: 'Page Not Found',
      status: 404,
    });
  });
}

module.exports = initRoutes;