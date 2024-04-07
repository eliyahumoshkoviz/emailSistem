const express = require('express');
const { auth } = require('./middlewares/auth');
const app = express();

require('dotenv').config();

app.use(require('cors')());
app.use(express.json());

require('./DL/db').connect();

app.use('/user',auth, require('./routers/user.router'))
app.use('/chat', require('./routers/chat.router'))

app.listen(5050,()=>console.log("*** Server is running ***"))