var express = require('express');
var app = express();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send("Test");
});

http.listen(process.env.PORT);