var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(5000);
console.log("server running...");
