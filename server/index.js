const express = require('express');
const app = express();

app.use(require('cors')());
app.use(express.json());

app.use('/email', require('./routers/email.router'))


app.listen(5050,()=>console.log("*** Server is running ***"))