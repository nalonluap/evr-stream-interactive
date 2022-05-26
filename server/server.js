const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const log = require('./modules/logger');
const api = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

//add all html loging in console where request is begin\end
app.use(morgan('dev'));
//add origin cors middleware
app.use(cors());
//add parsing body from url request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//add the router
app.use('/', api);



app.listen(PORT, () => {
  console.log(`Running at Port ${PORT}`);
  log.info(`Running at Port ${PORT}`);
});
