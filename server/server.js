const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const history = require('connect-history-api-fallback');

const db = require('./db');
const log = require('./modules/logger');

require('./modules/bot'); // comment this if bot don't need start

const app = express();
const PORT = process.env.PORT || 3000;

//add all html loging in console where request is begin\end
app.use(morgan('dev'));
//add origin cors middleware
app.use(cors());
//add parsing body from url request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//add vue routes to express server
app.use(history());

//add the router
app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/api', require('./routes/api'));
app.use('/api/bot', require('./routes/bot_connect'));
app.use('/api/game/words', require('./routes/gw_api'));
app.use('/api/user/', require('./routes/users'));


db.sync({ force: true }).then(() => {
  log.info('DB is runnig')
});// delete {force: true}, if db dont need cleaned in startup

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
  log.info(`Running at port ${PORT}`);
});
