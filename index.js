var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(3000);
console.log("server running...");