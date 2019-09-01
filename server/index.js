const express = require('express'); 
const app = express(); 
const port = 3000;
const path = require('path');

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.listen(port, () => console.log("App is listening on port: ", port))
