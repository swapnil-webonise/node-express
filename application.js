const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const appConstants = require('./constants/app-constants');
const initRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'));

// Initialize routes
initRoutes(app);

// Setup view engine
app.set('views', './views');
app.set('view engine', 'pug');


app.listen(appConstants.PORT, () => {
  console.log(`Application is running on port ${appConstants.PORT}`);
});