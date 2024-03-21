const express = require('express');
const app = express();

require('dotenv').config();

app.use(require('cors')());
app.use(express.json());

require('./DL/db').connect();

app.use('/user', require('./routers/user.router'))
app.use('/email', require('./routers/email.router'))

app.listen(5050,()=>console.log("*** Server is running ***"))