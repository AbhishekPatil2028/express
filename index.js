const express = require('express');

const app = express();

const PORT = 3000;
const HOST_NAME = 'localhost';

app.listen(PORT,HOST_NAME,()=>{
    console.log(`Server started at port :${PORT} on ${HOST_NAME}`);
});